<?php

namespace App\Filament\Resources\ServiceCardSlides;

use App\Filament\Resources\ServiceCardSlides\Pages\ManageServiceCardSlides;
use App\Models\CardSlide;
use App\Models\Page;
use App\Traits\useRepeatFormFilament;
use BackedEnum;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use UnitEnum;

class ServiceCardSlideResource extends Resource
{
    use useRepeatFormFilament;

    protected static ?string $model = CardSlide::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedSquare3Stack3d;

    protected static string|UnitEnum|null $navigationGroup = 'Servicios';

    protected static ?string $navigationLabel = 'Servicios complementarios';

    protected static ?string $modelLabel = 'Servicio complementario';

    protected static ?string $pluralModelLabel = 'Servicios complementarios';

    protected static ?int $navigationSort = 1;

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()->whereHas('page', fn($query) => $query->where('title', 'Servicios'));
    }

    public static function form(Schema $schema): Schema
    {
        $pageId = Page::where('title', 'Servicios')->first()->id ?? null;

        return self::repeatFormCardSlide($schema, $pageId);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->defaultSort('order')
            ->reorderable('order')
            ->columns([
                TextColumn::make('page.title')
                    ->label('Página')
                    ->sortable()
                    ->searchable(),
                ImageColumn::make('image')
                    ->label('Imagen')
                    ->square(),
                TextColumn::make('title')
                    ->label('Título')
                    ->searchable()
                    ->html()
                    ->limit(30),
            ])
            ->filters([
                //
            ])
            ->recordActions([
                EditAction::make(),
                DeleteAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => ManageServiceCardSlides::route('/'),
        ];
    }
}
