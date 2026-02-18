<?php

namespace App\Filament\Resources\ServiceArticles\Pages;

use App\Filament\Resources\ServiceArticles\ServiceArticleResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ManageRecords;

class ManageServiceArticles extends ManageRecords
{
    protected static string $resource = ServiceArticleResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
