<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;



class SubscriptionInvoice extends Model {





    use HasFactory;



    protected $guarded = [];





    protected $appends = [ 'stripe' ];






    public function getStripeAttribute() {

        return $this->account->findInvoice($this->stripe_id);

    }





    public function account() {

        return $this->belongsTo( Account::class );
    }

}
