<?php

namespace App\Filament\Resources\HomeCardSlides\Pages;

use App\Filament\Resources\HomeCardSlides\HomeCardSlideResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ManageRecords;

class ManageHomeCardSlides extends ManageRecords
{
    protected static string $resource = HomeCardSlideResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make()
                ->hidden(fn() => HomeCardSlideResource::getEloquentQuery()->count() >= 2),
        ];
    }
}
