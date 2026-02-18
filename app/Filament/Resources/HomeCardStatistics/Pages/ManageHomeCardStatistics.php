<?php

namespace App\Filament\Resources\HomeCardStatistics\Pages;

use App\Filament\Resources\HomeCardStatistics\HomeCardStatisticResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ManageRecords;

class ManageHomeCardStatistics extends ManageRecords
{
    protected static string $resource = HomeCardStatisticResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make()
                ->hidden(fn() => HomeCardStatisticResource::getModel()::count() >= 3),
        ];
    }
}
