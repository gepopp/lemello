<?php

namespace App\Models;


use App\Traits\AccountScoped;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;




class Project extends Model
{

    use HasFactory;
    use SoftDeletes;
    use AccountScoped;




    protected $guarded = [];




    protected $fillable = [
        'account_id',
        'user_id',
        'contact_id',
        'name',
        'description',
    ];




    protected $with = [ 'contact', 'timetracks' ];




    protected $appends = [ 'classname' ];




    public function timetracks()
    {

        return $this->morphMany(TimeRecord::class, 'timetrackable');
    }




    public function contact()
    {

        return $this->belongsTo(Contact::class);
    }




    public function scopeFilter($query, array $filters)
    {

        $query->when($filters['customer_id'] ?? [], function ($query) use ($filters) {

            $query->where('contact_id', $filters['customer_id']);
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
}
