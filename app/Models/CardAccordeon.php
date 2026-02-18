<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Storage;

class CardAccordeon extends Model
{
    protected $fillable = [
        'page_id',
        'background',
        'icon',
        'title',
        'description',
        'order',
    ];

    protected function background(): Attribute
    {
        return Attribute::make(
            get: fn (?string $value) => $value ? Storage::url($value) : null,
        );
    }

    protected function icon(): Attribute
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
