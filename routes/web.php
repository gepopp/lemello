<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;



/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get( '/', function () {

    return Inertia::render( 'Auth/Login' );
} );

Route::middleware( [
    'auth:sanctum',
    config( 'jetstream.auth_session' ),
    'verified',
] )->group( function () {

    Route::get( '/dashboard', function () {

        return Inertia::render( 'Dashboard' );
    } )->name( 'dashboard' );


    Route::get( '/subscription', function () {

        \Stripe\Stripe::setApiKey(env('STRIPE_SECRET'));
        $stripe = new Stripe\StripeClient( env('STRIPE_SECRET'));

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


        return Inertia::render( 'Subscription', [
            'key' => env( 'STRIPE_KEY' ),
            'customer' => $customer,
            'subscriptionId' => $subscription->id,
            'client_secret' => $subscription->latest_invoice->payment_intent->client_secret
        ] );
    } )->name( 'subscription' );


} );


Route::get( '/notification', function () {

    return ( new \Illuminate\Auth\Notifications\VerifyEmail() )
        ->toMail( \App\Models\User::first() );
} );
