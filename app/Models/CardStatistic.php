<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CardStatistic extends Model
{
    protected $fillable = [
        'page_id',
        'icon',
        'title',
        'description',
        'order',
    ];

    public function page(): BelongsTo
    {
        return $this->belongsTo(Page::class);
    }
}
