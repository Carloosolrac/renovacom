<?php

namespace App\Filament\Resources\CardAccordeonDowns;

use App\Filament\Resources\CardAccordeonDowns\Pages\ManageCardAccordeonDowns;
use App\Models\CardAccordeonDown;
use App\Models\Page;
use BackedEnum;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Hidden;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Resources\Resource;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use UnitEnum;

class CardAccordeonDownResource extends Resource
{
    protected static ?string $model = CardAccordeonDown::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    protected static string|UnitEnum|null $navigationGroup = 'Metodología';

    protected static ?string $navigationLabel = 'Tarjetas acordeón';

    protected static ?string $modelLabel = 'Tarjeta acordeón';

    protected static ?string $pluralModelLabel = 'Tarjetas acordeón';

    public static function form(Schema $schema): Schema
    {
        $pageId = Page::where('title', 'Metodología')->first()?->id;

        return $schema
            ->components([
                Section::make('Contenido')
                    ->columns(1)
                    ->schema([
                        Hidden::make('page_id')
                            ->default($pageId),
                        TextInput::make('title')
                            ->label('Título')
                            ->required()
                            ->maxLength(255),
                        FileUpload::make('image')
                            ->label('Imagen de fondo')
                            ->image()
                            ->maxSize(2048)
                            ->directory('card-accordeon-down')
                            ->required(),
                        FileUpload::make('icon')
                            ->label('Ícono')
                            ->image()
                            ->maxSize(100)
                            ->directory('card-accordeon-down/icons')
                            ->required(),

                    ])
                    ->columnSpanFull(),
                Section::make('Contenido desplegable')
                    ->columns(1)
                    ->schema([
                        Repeater::make('items')
                            ->label('Elementos')
                            ->relationship('items')
                            ->orderColumn('order')
                            ->reorderable()
                            ->schema([
                                TextInput::make('title')
                                    ->label('Título')
                                    ->required()
                                    ->maxLength(255),
                                Textarea::make('description')
                                    ->label('Descripción')
                                    ->required()
                                    ->rows(3),
                            ])
                            ->maxItems(3)

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
                ImageColumn::make('image')
                    ->label('Imagen')
                    ->square(),
                TextColumn::make('title')
                    ->label('Título')
                    ->searchable()
                    ->limit(40),
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
            'index' => ManageCardAccordeonDowns::route('/'),
        ];
    }
}
