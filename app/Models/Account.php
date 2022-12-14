<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\AsArrayObject;
use Laravel\Cashier\Billable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class Account extends Model
{


    use HasFactory;
    use Billable;


    protected $with = ['activeSubscriptions'];


    protected $guarded = [];


    protected $casts = ['settings' => AsArrayObject::class];



    public function users()
    {

        return $this->hasMany(User::class);
    }





    public function subscriptionInvoices() {

        return $this->hasMany( SubscriptionInvoice::class );
    }





    public function activeSubscriptions() {

        return $this->subscriptions()->where( function ( $query ) {

            $query->whereNull( 'ends_at' );
            $query->orWhere( 'ends_at', '>', now() );
        } );
    }

}
