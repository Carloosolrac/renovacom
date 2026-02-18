<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CardAccordeonDownList extends Model
{
    protected $table = 'card_accordeon_down_list';

    protected $fillable = [
        'card_accordeon_down_id',
        'title',
        'description',
        'order',
    ];

    public function cardAccordeonDown(): BelongsTo
    {
        return $this->belongsTo(CardAccordeonDown::class);
    }
}
