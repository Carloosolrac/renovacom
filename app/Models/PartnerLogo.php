<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PartnerLogo extends Model
{
    protected $fillable = [
        'page_id',
        'image',
        'alt',
        'order',
    ];

    public function page(): BelongsTo
    {
        return $this->belongsTo(Page::class);
    }
}
