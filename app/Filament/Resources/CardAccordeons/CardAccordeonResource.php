<?php

namespace App\Filament\Resources\CardAccordeons;

use App\Filament\Resources\CardAccordeons\Pages\ManageCardAccordeons;
use App\Models\CardAccordeon;
use App\Models\Page;
use BackedEnum;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Hidden;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Resources\Resource;
use Filament\Schemas\Components\Grid;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use UnitEnum;

class CardAccordeonResource extends Resource
{
    protected static ?string $model = CardAccordeon::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedSquares2x2;

    protected static string|UnitEnum|null $navigationGroup = 'Inicio';

    protected static ?string $navigationLabel = 'Tarjetas flujo de trabajo';

    protected static ?string $modelLabel = 'Tarjeta flujo de trabajo';

    protected static ?string $pluralModelLabel = 'Tarjetas flujo de trabajo';


    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                Hidden::make('page_id')
                    ->default(function () {
                        return Page::where('title', 'Inicio')->first()->id ?? null;
                    })
                    ->required(),
                TextInput::make('title')
                    ->label('Título')
                    ->required()
                    ->placeholder('Ej: Captura autónoma de datos')
                    ->columnSpanFull(),
                RichEditor::make('description')
                    ->label('Descripción')
                    ->required()
                    ->toolbarButtons([
                        'bold',
                        'italic',
                    ])
                    ->columnSpanFull(),
                Grid::make(2)
                    ->schema([
                        FileUpload::make('background')
                            ->label('Imagen de fondo')
                            ->image()
                            ->maxSize(2048) // 2MB
                            ->directory('card-accordeons/backgrounds')
                            ->required(),
                        FileUpload::make('icon')
                            ->label('Icono')
                            ->image()
                            ->maxSize(100) // 400KB 
                            ->directory('icons')
                            ->required(),
                    ])
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
                    ->label('Título')
                    ->searchable()
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
            'index' => ManageCardAccordeons::route('/'),
        ];
    }
}
