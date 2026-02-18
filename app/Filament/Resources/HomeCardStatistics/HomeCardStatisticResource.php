<?php

namespace App\Filament\Resources\HomeCardStatistics;

use App\Filament\Resources\HomeCardStatistics\Pages\ManageHomeCardStatistics;
use App\Models\CardStatistic;
use BackedEnum;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Hidden;
use Filament\Forms\Components\TextInput;
use Filament\Resources\Resource;
use Filament\Schemas\Components\Grid;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use UnitEnum;

class HomeCardStatisticResource extends Resource
{
    protected static ?string $model = CardStatistic::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedChartBar;

    protected static string|UnitEnum|null $navigationGroup = 'Inicio';

    protected static ?string $navigationLabel = 'Estadísticas';

    protected static ?string $modelLabel = 'Estadística';

    protected static ?string $pluralModelLabel = 'Estadísticas';

    protected static ?int $navigationSort = 5;

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                Hidden::make('page_id')
                    ->default(fn() => \App\Models\Page::where('title', 'Inicio')->first()?->id),
                FileUpload::make('icon')
                    ->label('Icono')
                    ->image()
                    ->directory('card-statistics')
                    ->maxSize(100)
                    ->required()
                    ->columnSpanFull(),
                TextInput::make('title')
                    ->label('Título/Valor')
                    ->required()
                    ->placeholder('Ej: +70 MWP')
                    ->columnSpanFull(),
                TextInput::make('description')
                    ->label('Descripción')
                    ->required()
                    ->placeholder('Ej: Capacidad inspeccionada por día')
                    ->columnSpanFull(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->defaultSort('order')
            ->reorderable('order')
            ->columns([
                ImageColumn::make('icon')
                    ->label('Icono')
                    ->circular(),
                TextColumn::make('title')
                    ->label('Valor')
                    ->searchable(),
                TextColumn::make('description')
                    ->label('Descripción')
                    ->limit(40),
                TextColumn::make('order')
                    ->label('Orden')
                    ->sortable(),
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
            'index' => ManageHomeCardStatistics::route('/'),
        ];
    }
}
