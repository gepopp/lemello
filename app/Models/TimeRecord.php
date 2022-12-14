<?php

namespace App\Models;

use App\Traits\AccountScoped;
use Illuminate\Database\Eloquent\Model;
use App\Models\Scopes\CurrentMonthScope;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class TimeRecord extends Model
{
    use HasFactory;
    use SoftDeletes;
    use AccountScoped;

    protected $casts = [
        'started_at' => 'datetime',
        'ended_at'   => 'datetime',
    ];

    protected $guarded = [];

    protected $fillable = [
        'timetrackable_type',
        'timetrackable_id',
        'account_id',
        'user_id',
        'started_at',
        'ended_at',
        'minutes',
        'note',
    ];


    protected static function booted()
    {
        static::addGlobalScope('byStart', function (Builder $query){
            return  $query->orderBy('started_at', 'ASC');
        });

        static::addGlobalScope( new CurrentMonthScope );
    }




    public function timetrackable()
    {
        return $this->morphTo();
    }


    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['customer_id'] ?? [], function ($query) use ($filters) {
            $query->where('timetrackable_id', $filters['customer_id'])
                  ->where('timetrackable_type', Contact::class);
        });
    }

}
