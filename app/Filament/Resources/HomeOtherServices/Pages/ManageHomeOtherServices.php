<?php

namespace App\Filament\Resources\HomeOtherServices\Pages;

use App\Filament\Resources\HomeOtherServices\HomeOtherServiceResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ManageRecords;

class ManageHomeOtherServices extends ManageRecords
{
    protected static string $resource = HomeOtherServiceResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
