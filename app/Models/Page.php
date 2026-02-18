<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Page extends Model
{
    protected $fillable = [
        'title',
        'slug',
    ];

    public function banner(): HasOne
    {
        return $this->hasOne(Banner::class);
    }
}
