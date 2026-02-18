<?php

namespace App\Filament\Resources\CardAccordeonDowns\Pages;

use App\Filament\Resources\CardAccordeonDowns\CardAccordeonDownResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ManageRecords;

class ManageCardAccordeonDowns extends ManageRecords
{
    protected static string $resource = CardAccordeonDownResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
