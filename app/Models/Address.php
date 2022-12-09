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




    public function addressable()
    {

        return $this->morphTo('addressable');
    }




    public function country()
    {

        return $this->belongsTo(Country::class);
    }




    public function __toString()
    {

        $string = $this->line_1;
        $string .= $this->line_2 ? ' ' . $this->line_2 : '';
        $string .= $this->zip ? ', ' . $this->zip : '';
        $string .= $this->city ? ' ' . $this->city : '';
        $string .= ' ' . $this->country->{app()->getLocale()};

        return $string;
    }

}
