<?php

namespace App\Filament\Resources\ServiceCardSlides\Pages;

use App\Filament\Resources\ServiceCardSlides\ServiceCardSlideResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ManageRecords;

class ManageServiceCardSlides extends ManageRecords
{
    protected static string $resource = ServiceCardSlideResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make()
                ->hidden(fn() => ServiceCardSlideResource::getEloquentQuery()->count() >= 3),
        ];
    }
}
