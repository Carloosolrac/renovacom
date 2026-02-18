<?php

namespace App\Filament\Resources\HomePartnerLogos\Pages;

use App\Filament\Resources\HomePartnerLogos\HomePartnerLogoResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ManageRecords;

class ManageHomePartnerLogos extends ManageRecords
{
    protected static string $resource = HomePartnerLogoResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
