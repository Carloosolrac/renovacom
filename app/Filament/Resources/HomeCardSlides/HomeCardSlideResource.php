<?php

namespace App\Filament\Resources\HomeCardSlides;

use App\Filament\Resources\HomeCardSlides\Pages\ManageHomeCardSlides;
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
use Filament\Tables\Filters\QueryBuilder;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use UnitEnum;

class HomeCardSlideResource extends Resource
{
    use useRepeatFormFilament;

    protected static ?string $model = CardSlide::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedSquare3Stack3d;

    protected static string|UnitEnum|null $navigationGroup = 'Inicio';

    protected static ?string $navigationLabel = 'Tarjetas técnicas de inspección';

    protected static ?string $modelLabel = 'Tarjeta técnica de inspección';

    protected static ?string $pluralModelLabel = 'Tarjetas técnicas de inspección';

    protected static ?int $nametitlenameavigationSort = 3;

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()->whereHas('page', fn($query) => $query->where('title', 'Inicio'));
    }

    public static function form(Schema $schema): Schema
    {
        $pageId = Page::where('title', 'Inicio')->first()->id ?? null;
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
                TextColumn::make('section_key')
                    ->label('Sección')
                    ->badge()
                    ->searchable(),
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
            'index' => ManageHomeCardSlides::route('/'),
        ];
    }
}
