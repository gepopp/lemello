<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\Account;
use Laravel\Cashier\Cashier;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SubscriptionsController extends Controller
{

    public function subscription()
    {

        $subscription = Auth::user()->account->subscriptions()->where('name', 'default')->active()->first();


        return Inertia::render('Subscription', [
            'account' => Auth::user()->account,
            'subscription' => $subscription
        ]);

    }


    public function susbcribe()
    {

        $billingdata = Auth::user()->account->settings['billingdata'] ?? [
                'bill_to' => Auth::user()->account->name,
                'address' => null,
                'address_addition' => null,
                'zip' => null,
                'city' => null,
                'country' => null,
                'terms' => null,
            ];

        $payment = Cashier::stripe()->setupIntents->create([
            'payment_method_types' => ['card', 'sepa_debit'],
        ]);

        return Inertia::render('Subscribe',
            [
                'key' => env('STRIPE_KEY'),
                'client_secret' => $payment->client_secret,
                'redirect' => \route('dashboard'),
                'billingdata' => $billingdata
            ]);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "intent" => ['required', 'array'],
            "bill_to" => ['required', 'string', 'max:255'],
            "address" => ['required', 'string', 'max:255'],
            "address_addition" => ['nullable', 'string', 'max:255'],
            "zip" => ['integer', 'required'],
            "city" => ['required', 'string', 'max:255'],
            "country" => ['required', 'string', 'max:255'],
            "terms" => ['accepted']
        ]);

        if ($validator->fails()) {
            return back()->withErrors($validator)->with('intent', Cashier::stripe()->setupIntents->create([
                'payment_method_types' => ['card', 'sepa_debit'],
            ]));
        }

        if (Auth::user()->account->subscribed('default')) {

            Auth::user()->account->updateDefaultPaymentMethod($request->intent['payment_method']);
        } else {

            Auth::user()->account->newSubscription(
                'default', 'price_1LRkwyHs0uYxWjsAu9gXpQpf'
            )->create($request->intent['payment_method']);
        }

        Auth::user()->account->update([
            'settings' => [
                'billingdata' => $request->all()
            ]
        ]);

        return redirect(route('subscription', Auth::user()->account));
    }
}
