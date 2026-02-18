<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ServiceArticleDelivery extends Model
{
    protected $fillable = [
        'service_article_id',
        'icon',
        'title',
        'description',
        'order',
    ];

    public function serviceArticle(): BelongsTo
    {
        return $this->belongsTo(ServiceArticle::class);
    }
}
