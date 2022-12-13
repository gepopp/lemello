<?php

namespace App\Models;


use Illuminate\Support\Str;
use App\Traits\AccountScoped;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;




class CustomerPage extends Model
{
    use HasFactory;
    use SoftDeletes;
    use AccountScoped;
    use HasSlug;




    protected $guarded = [];




    public function contact()
    {

        return $this->belongsTo(Contact::class);
    }




    /**
     * Get the options for generating the slug.
     */
    public function getSlugOptions() : SlugOptions
    {
        return SlugOptions::create()
                          ->generateSlugsFrom(Str::uuid())
                          ->saveSlugsTo('slug');
    }

    /**
     * Get the route key for the model.
     *
     * @return string
     */
    public function getRouteKeyName()
    {
        return 'slug';
    }

}
