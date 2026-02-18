<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class CardAccordeonDown extends Model
{
    protected $fillable = [
        'page_id',
        'title',
        'image',
        'icon',
        'order',
    ];

    public function page(): BelongsTo
    {
        return $this->belongsTo(Page::class);
    }

    public function items(): HasMany
    {
        return $this->hasMany(CardAccordeonDownList::class)->orderBy('order');
    }
}
