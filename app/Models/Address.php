<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class Address extends Model
{


    use HasFactory;

    protected $with = [ 'country' ];

    protected $fillable = [
        'line_1',
        'line_2',
        'zip',
        'city',
        'country_id',
    ];

    function addressable()
    {
        return $this->morphTo('addressable');
    }

    function country()
    {
        return $this->belongsTo(Country::class);
    }


}
