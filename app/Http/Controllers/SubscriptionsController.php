<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Account;
use Stripe\StripeClient;
use Illuminate\Http\Request;

class SubscriptionsController extends Controller
{

    public function subscription(Account $account){
        dd($account);
    }


     public function susbcribe(){

         \Stripe\Stripe::setApiKey(env('STRIPE_SECRET'));
         $stripe = new StripeClient( env('STRIPE_SECRET'));

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


         return Inertia::render( 'Subscribe', [
             'key' => env( 'STRIPE_KEY' ),
             'customer' => $customer,
             'subscriptionId' => $subscription->id,
             'client_secret' => $subscription->latest_invoice->payment_intent->client_secret,
             'redirect' => \route('dashboard')
         ] );

     }
}
