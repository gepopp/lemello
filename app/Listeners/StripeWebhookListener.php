<?php

namespace App\Listeners;

use Laravel\Cashier\Cashier;
use Laravel\Cashier\Events\WebhookReceived;



class StripeWebhookListener {





    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct() {
        //
    }





    /**
     * Handle the event.
     *
     * @param object $event
     *
     * @return void
     */
    public function handle( WebhookReceived $event ) {

        if ( $event->payload['type'] === 'invoice.payment_succeeded' ) {

            $invoice = $event->payload['data']['object'];

            $account = Cashier::findBillable( $invoice['customer'] );

            $account->subscriptionInvoices()->create([
               'stripe_id' => $invoice['customer']
            ]);

        }
    }
}
