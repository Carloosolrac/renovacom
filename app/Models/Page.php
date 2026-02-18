<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Page extends Model
{
    protected $fillable = [
        'title',
        'slug',
    ];

    public function banner(): HasOne
    {
        return $this->hasOne(Banner::class)->with('characteristics');
    }

    public function cardAccordeons(): HasMany
    {
        return $this->hasMany(CardAccordeon::class)->orderBy('order');
    }

    public function cardSlides(): HasMany
    {
        return $this->hasMany(CardSlide::class)->orderBy('order');
    }
}
