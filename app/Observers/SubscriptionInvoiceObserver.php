<?php

namespace App\Observers;

use App\Models\SubscriptionInvoice;

class SubscriptionInvoiceObserver
{
    /**
     * Handle the SubscriptionInvoice "created" event.
     *
     * @param  \App\Models\SubscriptionInvoice  $subscriptionInvoice
     * @return void
     */
    public function created(SubscriptionInvoice $subscriptionInvoice)
    {
        //
    }

    /**
     * Handle the SubscriptionInvoice "updated" event.
     *
     * @param  \App\Models\SubscriptionInvoice  $subscriptionInvoice
     * @return void
     */
    public function updated(SubscriptionInvoice $subscriptionInvoice)
    {
        //
    }

    /**
     * Handle the SubscriptionInvoice "deleted" event.
     *
     * @param  \App\Models\SubscriptionInvoice  $subscriptionInvoice
     * @return void
     */
    public function deleted(SubscriptionInvoice $subscriptionInvoice)
    {
        //
    }

    /**
     * Handle the SubscriptionInvoice "restored" event.
     *
     * @param  \App\Models\SubscriptionInvoice  $subscriptionInvoice
     * @return void
     */
    public function restored(SubscriptionInvoice $subscriptionInvoice)
    {
        //
    }

    /**
     * Handle the SubscriptionInvoice "force deleted" event.
     *
     * @param  \App\Models\SubscriptionInvoice  $subscriptionInvoice
     * @return void
     */
    public function forceDeleted(SubscriptionInvoice $subscriptionInvoice)
    {
        //
    }
}
