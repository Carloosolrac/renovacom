<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\Storage;

class ServiceArticle extends Model
{
    protected $fillable = [
        'page_id',
        'title',
        'content',
        'precontent',
        'icon',
        'image',
        'order',
    ];

    protected function icon(): Attribute
    {
        return Attribute::make(
            get: fn (?string $value) => $value ? Storage::url($value) : null,
        );
    }

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

    public function deliveries(): HasMany
    {
        return $this->hasMany(ServiceArticleDelivery::class)->orderBy('order');
    }

    public function benefits(): HasMany
    {
        return $this->hasMany(ServiceArticleBenefit::class)->orderBy('order');
    }
}
