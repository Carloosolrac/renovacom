<?php

namespace App\Filament\Resources\Banners;

use App\Filament\Resources\Banners\Pages\ManageBanners;
use App\Models\Banner;
use App\Models\Page;
use BackedEnum;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\ViewAction;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Resources\Resource;
use Filament\Schemas\Components\Grid;
use Filament\Schemas\Components\Tabs;
use Filament\Schemas\Components\Tabs\Tab;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Utilities\Get;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class BannerResource extends Resource
{
    protected static ?string $model = Banner::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    protected static ?string $recordTitleAttribute = 'Banner';

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                Tabs::make('Banner')
                    ->tabs([
                        Tab::make('Contenido')
                            ->icon('heroicon-o-document-text')
                            ->schema([
                                Select::make('page_id')
                                    ->label('Página')
                                    ->relationship('page', 'title')
                                    ->options(function (Get $get) {
                                        return Page::doesntHave('banner')->pluck('title', 'id');
                                    })
                                    ->required()
                                    ->native(false)
                                    ->preload(),
                                RichEditor::make('title')
                                    ->label('Título')
                                    ->required()
                                    ->toolbarButtons(['textColor'])
                                    ->textColors([
                                        '#deff22' => 'Verde'
                                    ])
                                    ->placeholder('Texto principal del banner'),
                                TextInput::make('pretitle')
                                    ->label('Pretítulo')
                                    ->placeholder('Subtítulo o descripción corta'),
                                FileUpload::make('background_video')
                                    ->label('Video de fondo')
                                    ->acceptedFileTypes(['video/*'])
                                    ->directory('banners')
                                    ->maxSize(10240) // 10MB
                                    ->required(),
                                Repeater::make('characteristics')
                                    ->label('Características')
                                    ->relationship()
                                    ->schema([
                                        TextInput::make('text')
                                            ->label('Texto')
                                            ->required(),
                                    ])
                                    ->reorderable()
                                    ->orderColumn('order')

                            ]),
                        Tab::make('Configuración')
                            ->icon('heroicon-o-cog-6-tooth')
                            ->schema([
                                Section::make('Botón de acción')
                                    ->description('Configura el botón CTA del banner')
                                    ->collapsible()
                                    ->schema([
                                        Grid::make(2)
                                            ->schema([
                                                TextInput::make('button_text')
                                                    ->label('Texto del botón')
                                                    ->placeholder('Ej: Hablemos'),
                                                TextInput::make('button_link')
                                                    ->label('Enlace del botón')
                                                    ->placeholder('Ej: #contacto'),
                                            ]),
                                    ]),
                                Section::make('Opciones visuales')
                                    ->collapsible()
                                    ->schema([
                                        Grid::make(2)
                                            ->schema([
                                                Toggle::make('has_overlay')
                                                    ->label('Overlay oscuro')
                                                    ->helperText('Añade una capa semitransparente sobre el video'),
                                                Toggle::make('has_animation')
                                                    ->label('Animación de texto')
                                                    ->helperText('Activa la animación en el banner'),
                                            ]),
                                    ]),
                            ]),
                    ])

                    ->columnSpanFull(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('Banner')
            ->columns([
                TextColumn::make('page.title')
                    ->label('Página')
                    ->searchable(),
                TextColumn::make('title')
                    ->label('Título')
                    ->html()
                    ->searchable(),
                TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('updated_at')
                    ->label('Actualizado')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
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
            'index' => ManageBanners::route('/'),
        ];
    }
}
