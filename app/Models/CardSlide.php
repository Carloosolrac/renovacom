<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Storage;

class CardSlide extends Model
{
    protected $fillable = [
        'page_id',
        'section_key',
        'title',
        'description',
        'image',
        'order',
    ];

    protected function image(): Attribute
    {
        return Attribute::make(
            get: fn (?string $value) => $value ? Storage::url($value) : null,
        );
    }

    public function page(): BelongsTo
    {
        return $this->belongsTo(Page::class);
    }
}
