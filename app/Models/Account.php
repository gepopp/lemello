<?php

namespace App\Models;

use Laravel\Cashier\Billable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;



class Account extends Model {





    use HasFactory;
    use Billable;



    protected $guarded = [];





    public function users() {

        return $this->hasMany( User::class );
    }
}
