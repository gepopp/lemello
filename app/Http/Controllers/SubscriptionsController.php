<?php

namespace App\Http\Controllers;

use App\Http\Middleware\Authenticate;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\Account;
use Laravel\Cashier\Cashier;
use Stripe\StripeClient;
use Illuminate\Http\Request;

class SubscriptionsController extends Controller
{

    public function subscription(Account $account)
    {

        $subscription = $account->subscriptions()->where('name', 'default')->active()->first();
        $stripe_subscription = Cashier::stripe()->subscriptions->retrieve($subscription->stripe_id);

        $pay = 0;
        foreach ($stripe_subscription->items->data as $item) {
            $pay += $item->price->unit_amount;
        }


        return Inertia::render('Subscription', [
            'account' => $account,
            'subscription' => [
                'next_bill' => (new Carbon($stripe_subscription->current_period_end))->format('d.m.y'),
                'amount' => $pay,
                'payment_method' => Cashier::stripe()->paymentMethods->retrieve($stripe_subscription->default_payment_method)
            ]
        ]);

    }


    public function susbcribe()
    {


        if (Auth::user()->account->subscribed('default')) {
            return redirect(route('subscription', ['account' => Auth::user()->account]));
        }


        \Stripe\Stripe::setApiKey(env('STRIPE_SECRET'));
        $stripe = new StripeClient(env('STRIPE_SECRET'));

        $customer = \Illuminate\Support\Facades\Auth::user()->account->createOrGetStripeCustomer();

        $subscription = $stripe->subscriptions->create([
            'customer' => \Illuminate\Support\Facades\Auth::user()->account->stripe_id,
            'items' => [[
                'price' => "price_1LRkwyHs0uYxWjsAu9gXpQpf",
            ]],
            'payment_behavior' => 'default_incomplete',
            'payment_settings' => ['save_default_payment_method' => 'on_subscription'],
            'expand' => ['latest_invoice.payment_intent'],
        ]);


        return Inertia::render('Subscribe', [
            'key' => env('STRIPE_KEY'),
            'customer' => $customer,
            'subscriptionId' => $subscription->id,
            'client_secret' => $subscription->latest_invoice->payment_intent->client_secret,
            'redirect' => \route('dashboard')
        ]);

    }
}
