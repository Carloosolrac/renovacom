<?php

namespace App\Filament\Resources\HomeOtherServices;

use App\Filament\Resources\HomeOtherServices\Pages\ManageHomeOtherServices;
use App\Models\OtherService;
use BackedEnum;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Forms\Components\Hidden;
use Filament\Forms\Components\TextInput;
use Filament\Resources\Resource;
use Filament\Schemas\Components\Grid;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use UnitEnum;

class HomeOtherServiceResource extends Resource
{
    protected static ?string $model = OtherService::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedBriefcase;

    protected static string|UnitEnum|null $navigationGroup = 'Inicio';

    protected static ?string $navigationLabel = 'Otros Servicios';

    protected static ?string $modelLabel = 'Otro Servicio';

    protected static ?string $pluralModelLabel = 'Otros Servicios';

    protected static ?int $navigationSort = 4;

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                Hidden::make('page_id')
                    ->default(fn() => \App\Models\Page::where('title', 'Inicio')->first()?->id),
                TextInput::make('title')
                    ->label('Título')
                    ->required()
                    ->placeholder('Ej: Seguimiento a la construcción')
                    ->columnSpanFull(),
                TextInput::make('link')
                    ->label('Enlace')
                    ->placeholder('Ej: #contacto')
                    ->columnSpanFull(),

            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->defaultSort('order')
            ->reorderable('order')
            ->columns([
                TextColumn::make('title')
                    ->label('Título')
                    ->searchable()
                    ->limit(50),
                TextColumn::make('link')
                    ->label('Enlace')
                    ->badge(),
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
            ])
            ->reorderable('order');
    }

    public static function getPages(): array
    {
        return [
            'index' => ManageHomeOtherServices::route('/'),
        ];
    }
}
