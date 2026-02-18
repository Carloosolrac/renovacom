<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

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
