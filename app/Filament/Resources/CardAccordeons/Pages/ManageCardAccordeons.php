<?php

namespace App\Filament\Resources\CardAccordeons\Pages;

use App\Filament\Resources\CardAccordeons\CardAccordeonResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ManageRecords;

class ManageCardAccordeons extends ManageRecords
{
    protected static string $resource = CardAccordeonResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
