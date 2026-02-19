<?php

namespace App\Filament\Pages;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Tabs;
use Filament\Schemas\Components\Tabs\Tab;
use Filament\Schemas\Schema;
use Outerweb\FilamentSettings\Pages\Settings;

class SettingsPage extends Settings
{
    public static ?string $navigationLabel = 'Configuración';

    protected static ?string $title = 'Configuración del sitio';

    public function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                Tabs::make()
                    ->columnSpanFull()
                    ->tabs([
                        Tab::make('Datos de contacto')
                            ->icon('heroicon-o-phone')
                            ->schema([
                                Section::make('Información de la empresa')
                                    ->columns(2)
                                    ->schema([
                                        TextInput::make('contact.email')
                                            ->label('Email de contacto')
                                            ->email()
                                            ->placeholder('info@renovacom.cl')
                                            ->required(),
                                        TextInput::make('contact.phone')
                                            ->label('Teléfono')
                                            ->tel()
                                            ->placeholder('+56 9 9471 21 67')
                                            ->required(),
                                        TextInput::make('contact.phone_whatsapp')
                                            ->label('WhatsApp (solo números)')
                                            ->placeholder('56994712167')
                                            ->helperText('Número sin espacios ni símbolos para el link de WhatsApp'),
                                    ]),
                                Section::make('Redes sociales')
                                    ->columns(2)
                                    ->schema([
                                        TextInput::make('social.linkedin')
                                            ->label('LinkedIn')
                                            ->url()
                                            ->placeholder('https://www.linkedin.com/company/renovacom/'),
                                        TextInput::make('social.instagram')
                                            ->label('Instagram')
                                            ->url()
                                            ->placeholder('https://www.instagram.com/renovacom/'),
                                    ]),
                            ]),
                        Tab::make('SEO')
                            ->icon('heroicon-o-magnifying-glass')
                            ->schema([
                                TextInput::make('seo.title')
                                    ->label('Título del sitio')
                                    ->placeholder('Renovacom | Inspecciones con drones para energías renovables')
                                    ->helperText('Máximo 60 caracteres recomendado')
                                    ->maxLength(70)
                                    ->required(),
                                Textarea::make('seo.description')
                                    ->label('Meta descripción')
                                    ->placeholder('Servicios de inspección con drones e IA para parques eólicos y solares...')
                                    ->helperText('Máximo 160 caracteres recomendado')
                                    ->maxLength(170)
                                    ->rows(3)
                                    ->required(),
                                TextInput::make('seo.keywords')
                                    ->label('Palabras clave')
                                    ->placeholder('inspección drones, energía eólica, energía solar, renovables')
                                    ->helperText('Separadas por comas'),
                            ]),
                        Tab::make('Configuración avanzada')
                            ->schema([
                                Textarea::make('code.head')
                                    ->label('Código en el head')
                                    ->helperText('Scripts o estilos personalizados que se cargarán en el head de todas las páginas')
                                    ->rows(4),
                                Textarea::make('code.body')
                                    ->label('Código antes del cierre del body')
                                    ->helperText('Scripts personalizados que se cargarán antes del cierre de la etiqueta body')
                                    ->rows(4)
                            ])

                    ]),
            ]);
    }
}
