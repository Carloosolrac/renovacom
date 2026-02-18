<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Storage;

class ServiceArticleDelivery extends Model
{
    protected $fillable = [
        'service_article_id',
        'icon',
        'title',
        'description',
        'order',
    ];

    protected function icon(): Attribute
    {
        return Attribute::make(
            get: fn (?string $value) => $value ? Storage::url($value) : null,
        );
    }

    public function serviceArticle(): BelongsTo
    {
        return $this->belongsTo(ServiceArticle::class);
    }
}
