<?php

namespace App\Filament\Resources\HomePartnerLogos;

use App\Filament\Resources\HomePartnerLogos\Pages\ManageHomePartnerLogos;
use App\Models\PartnerLogo;
use BackedEnum;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Hidden;
use Filament\Forms\Components\TextInput;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use UnitEnum;

class HomePartnerLogoResource extends Resource
{
    protected static ?string $model = PartnerLogo::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedBuildingOffice2;

    protected static string|UnitEnum|null $navigationGroup = 'Inicio';

    protected static ?string $navigationLabel = 'Logos Partners';

    protected static ?string $modelLabel = 'Logo Partner';

    protected static ?string $pluralModelLabel = 'Logos Partners';

    protected static ?int $navigationSort = 6;

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                Hidden::make('page_id')
                    ->default(fn() => \App\Models\Page::where('title', 'Inicio')->first()?->id),

                FileUpload::make('image')
                    ->label('Logo')
                    ->image()
                    ->directory('partner-logos')
                    ->required()
                    ->columnSpanFull(),

                TextInput::make('alt')
                    ->label('Texto alternativo')
                    ->placeholder('Ej: Deloitte Logo')
                    ->columnSpanFull(),

            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->defaultSort('order')
            ->reorderable('order')
            ->columns([
                ImageColumn::make('image')
                    ->label('Logo')
                    ->height(40),
                TextColumn::make('name')
                    ->label('Nombre')
                    ->searchable(),
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
            'index' => ManageHomePartnerLogos::route('/'),
        ];
    }
}
