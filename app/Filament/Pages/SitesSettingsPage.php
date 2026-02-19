<?php

namespace App\Filament\Pages;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Tabs;
use Filament\Schemas\Components\Tabs\Tab;
use Filament\Schemas\Schema;
use Outerweb\FilamentSettings\Pages\Settings;

class SitesSettingsPage extends Settings
{
    public static ?string $navigationLabel = 'Sitios';

    protected static ?string $title = 'Configuración de sitios';

    public function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                Tabs::make()
                    ->columnSpanFull()
                    ->tabs([
                        Tab::make('Inicio')
                            ->icon('heroicon-o-home')
                            ->schema([
                                Section::make('Contenido SEO')
                                    ->schema([
                                        TextInput::make('home.title')
                                            ->label('Título SEO')
                                            ->required()
                                            ->placeholder('Ej: Soluciones integrales para la gestión de activos renovables'),
                                        Textarea::make('home.description')
                                            ->label('Descripción SEO')
                                            ->helperText('Se recomienda una longitud de 150-160 caracteres para una mejor visualización en los motores de búsqueda.')
                                            ->placeholder('Ej: En Renovacom, nos especializamos en ...'),
                                    ]),
                                Section::make('Sección de transformamos datos precisos en decisiones estratégicas')
                                    ->schema([
                                        FileUpload::make('home.article_image')
                                            ->label('Imagen del artículo')
                                            ->image()
                                            ->maxSize(2048) // 2MB
                                            ->directory('home')
                                            ->required(),
                                        RichEditor::make('home.article_left_text')
                                            ->label('Texto izquierdo del articulo')
                                            ->required()
                                            ->toolbarButtons([
                                                'bold'
                                            ])
                                            ->placeholder('Nuestro servicio entrega...'),
                                        RichEditor::make('home.article_right_text')
                                            ->label('Texto derecho del articulo')
                                            ->toolbarButtons([
                                                'bold'
                                            ])
                                            ->required()
                                            ->placeholder('Nuestro equipo cuenta con...'),
                                    ])
                            ]),
                        Tab::make('Metodología')
                            ->icon('heroicon-o-cog-6-tooth')
                            ->schema([
                                Section::make('Contenido SEO')
                                    ->schema([
                                        TextInput::make('methodology.title')
                                            ->label('Título SEO')
                                            ->placeholder('Ej: Nuestra metodología innovadora para la gestión de activos renovables'),
                                        Textarea::make('methodology.description')
                                            ->label('Descripción SEO')
                                            ->helperText('Se recomienda una longitud de 150-160 caracteres para una mejor visualización en los motores de búsqueda.')
                                            ->placeholder('Ej: En Renovacom, aplicamos una metodología basada en datos y tecnología avanzada para optimizar la gestión de activos renovables.'),
                                    ]),
                                Section::make('Sección de transformamos datos precisos en decisiones estratégicas')
                                    ->schema([
                                        FileUpload::make('methodology.article_image')
                                            ->label('Imagen del artículo')
                                            ->image()
                                            ->maxSize(2048) // 2MB
                                            ->directory('methodology')
                                            ->required(),
                                        RichEditor::make('methodology.article_left_text')
                                            ->toolbarButtons([
                                                'bold'
                                            ])
                                            ->label('Texto izquierdo del articulo')
                                            ->required()
                                            ->placeholder('Nuestro...'),
                                        RichEditor::make('methodology.article_right_text')
                                            ->label('Texto derecho del articulo')
                                            ->toolbarButtons([
                                                'bold'
                                            ])
                                            ->required()
                                            ->placeholder('Nuestro equipo...'),
                                    ]),
                            ]),
                        Tab::make('Servicios')
                            ->icon('heroicon-o-cog')
                            ->schema([
                                Section::make('Contenido SEO')
                                    ->schema([
                                        TextInput::make('services.title')
                                            ->label('Título SEO')
                                            ->placeholder('Ej: Nuestros servicios especializados para la gestión de activos renovables...'),
                                        Textarea::make('services.description')
                                            ->label('Descripción SEO')
                                            ->helperText('Se recomienda una longitud de 150-160 caracteres para una mejor visualización en los motores de búsqueda.')
                                            ->placeholder('Ej: En Renovacom, ofrecemos una gama de servicios especializados diseñados para optimizar la gestión de activos renovables, incluyendo inspecciones con drones, análisis de datos avanzados y soluciones personalizadas para parques eólicos y solares.'),
                                    ])
                            ]),
                    ]),
            ]);
    }
}
