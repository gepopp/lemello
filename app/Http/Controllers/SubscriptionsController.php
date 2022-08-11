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

        $payment = Cashier::stripe()->setupIntents->create([
            'payment_method_types' => ['card', 'sepa_debit', 'sofort'],
        ]);

        return Inertia::render('Subscribe', [
            'key' => env('STRIPE_KEY'),
            'client_secret' => $payment->client_secret,
            'redirect' => \route('dashboard')
        ]);
    }
}
