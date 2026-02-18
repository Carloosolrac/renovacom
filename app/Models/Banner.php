<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\Storage;

class Banner extends Model
{
    protected $fillable = [
        'page_id',
        'title',
        'pretitle',
        'background_video',
        'button_link',
        'button_text',
        'has_overlay',
        'has_animation',
    ];

    protected function casts(): array
    {
        return [
            'has_overlay' => 'boolean',
            'has_animation' => 'boolean',
        ];
    }

    protected function backgroundVideo(): Attribute
    {
        return Attribute::make(
            get: fn (?string $value) => $value ? Storage::url($value) : null,
        );
    }

    public function page(): BelongsTo
    {
        return $this->belongsTo(Page::class);
    }

    public function characteristics(): HasMany
    {
        return $this->hasMany(BannerCharacteristic::class)->orderBy('order');
    }
}
