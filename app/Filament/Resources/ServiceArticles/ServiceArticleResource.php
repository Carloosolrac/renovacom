<?php

namespace App\Filament\Resources\ServiceArticles;

use App\Filament\Resources\ServiceArticles\Pages\ManageServiceArticles;
use App\Models\Page;
use App\Models\ServiceArticle;
use BackedEnum;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Hidden;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Resources\Resource;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Tabs;
use Filament\Schemas\Components\Tabs\Tab;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use UnitEnum;

class ServiceArticleResource extends Resource
{
    protected static ?string $model = ServiceArticle::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedDocumentText;

    protected static string|UnitEnum|null $navigationGroup = 'Servicios';

    protected static ?string $navigationLabel = 'Servicios principales';

    protected static ?string $modelLabel = 'Servicio principal';

    protected static ?string $pluralModelLabel = 'Servicios principales';

    protected static ?int $navigationSort = 0;

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()->whereHas('page', fn($query) => $query->where('title', 'Servicios'));
    }

    public static function form(Schema $schema): Schema
    {
        $pageId = Page::where('title', 'Servicios')->first()?->id;

        return $schema
            ->components([
                Tabs::make()
                    ->schema([
                        Tab::make('Contenido principal')
                            ->columns(1)
                            ->schema([
                                Hidden::make('page_id')
                                    ->default($pageId),
                                RichEditor::make('title')
                                    ->label('Título')
                                    ->required()
                                    ->toolbarButtons(['textColor'])
                                    ->textColors(['#deff22' => 'Verde'])
                                    ->columnSpanFull(),
                                TextInput::make('precontent')
                                    ->label('Subtítulo')
                                    ->required()
                                    ->maxLength(255)
                                    ->columnSpanFull(),
                                Textarea::make('content')
                                    ->label('Descripción')
                                    ->required()
                                    ->rows(3)
                                    ->columnSpanFull(),
                                FileUpload::make('icon')
                                    ->label('Ícono')
                                    ->image()
                                    ->directory('service-articles/icons')
                                    ->maxSize(100) // 400KB
                                    ->required(),
                                FileUpload::make('image')
                                    ->label('Imagen de fondo')
                                    ->image()
                                    ->maxSize(2048) // 2MB
                                    ->directory('service-articles')
                                    ->required(),
                            ]),
                        Tab::make('Contenido dinámico')
                            ->schema([
                                Section::make('Qué entregamos')
                                    ->schema([
                                        Repeater::make('deliveries')
                                            ->label('Entregas')
                                            ->relationship('deliveries')
                                            ->orderColumn('order')
                                            ->reorderable()
                                            ->itemLabel(fn(array $state): ?string => $state['title'] ?? 'Nueva entrega')
                                            ->schema([
                                                FileUpload::make('icon')
                                                    ->label('Ícono')
                                                    ->image()
                                                    ->maxSize(100)
                                                    ->directory('service-articles/deliveries')
                                                    ->required(),
                                                TextInput::make('title')
                                                    ->label('Título')
                                                    ->required()
                                                    ->maxLength(255),
                                                Textarea::make('description')
                                                    ->label('Descripción')
                                                    ->required()
                                                    ->rows(2),
                                            ])
                                            ->maxItems(3),
                                    ]),
                                Section::make('Beneficios')
                                    ->schema([
                                        Repeater::make('benefits')
                                            ->label('Beneficios')
                                            ->relationship('benefits')
                                            ->orderColumn('order')
                                            ->reorderable()
                                            ->itemLabel(fn(array $state): ?string => $state['label'] ?? 'Nuevo beneficio')
                                            ->schema([
                                                FileUpload::make('icon')
                                                    ->label('Ícono')
                                                    ->image()
                                                    ->maxSize(100)
                                                    ->directory('service-articles/benefits')
                                                    ->required(),
                                                TextInput::make('label')
                                                    ->label('Texto')
                                                    ->required()
                                                    ->maxLength(255),
                                            ])
                                            ->maxItems(4),
                                    ]),
                            ])
                    ])
                    ->columnSpanFull()


            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->defaultSort('order')
            ->reorderable('order')
            ->columns([
                ImageColumn::make('icon')
                    ->label('Ícono')
                    ->square(),
                TextColumn::make('title')
                    ->label('Título')
                    ->searchable()
                    ->html()
                    ->limit(40),
                TextColumn::make('deliveries_count')
                    ->label('Entregas')
                    ->counts('deliveries'),
                TextColumn::make('benefits_count')
                    ->label('Beneficios')
                    ->counts('benefits'),
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
            'index' => ManageServiceArticles::route('/'),
        ];
    }
}
