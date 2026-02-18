<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

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

    public function page(): BelongsTo
    {
        return $this->belongsTo(Page::class);
    }

    public function characteristics(): HasMany
    {
        return $this->hasMany(BannerCharacteristic::class)->orderBy('order');
    }
}
