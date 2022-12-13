<?php

namespace App\Models;


use App\Traits\AccountScoped;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;




class Contact extends Model
{


    use HasFactory, SoftDeletes, AccountScoped;




    protected $guarded = [];




    protected $with = [ 'address', 'company', 'timetracks' , 'customer_page'];




    protected $appends = [ 'contacts_count', 'classname' ];




    public function scopeIsCompany($query)
    {

        return $query->where('is_company', true);
    }




    public function company()
    {

        return $this->belongsTo(Contact::class, 'contact_id', 'id');
    }




    public function contacts()
    {

        return $this->hasMany(Contact::class);
    }




    public function address()
    {

        return $this->morphOne(Address::class, 'addressable');
    }




    public function projects()
    {

        return $this->hasMany(Project::class);
    }




    public function timetracks()
    {

        return $this->morphMany(TimeRecord::class, 'timetrackable');
    }




    public function customer_page()
    {

        return $this->hasOne(CustomerPage::class);
    }




    public function scopeFilter($query, array $filters)
    {

        $query->when($filters['search'] ?? null, function ($query, $search) {

            $query->where(function ($query) use ($search) {

                $query->where('name', 'like', '%' . $search . '%')
                      ->orWhereHas('company', function ($query) use ($search) {

                          $query->where('name', 'like', '%' . $search . '%');
                      });
            });
        })->when($filters['tracks'] ?? null, function ($query) {

            $query->whereHas('timetracks');
        });
    }




    /**
     * Determine if the user is an administrator.
     *
     * @return \Illuminate\Database\Eloquent\Casts\Attribute
     */
    protected function classname(): Attribute
    {

        return new Attribute(
            get: fn() => get_class($this),
        );
    }




    public function getContactsCountAttribute()
    {

        return $this->contacts()->count();
    }

}

