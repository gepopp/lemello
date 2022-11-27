<?php

namespace App\Models;

use App\Traits\AccountScoped;
use Illuminate\Database\Eloquent\Model;
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
