<?php

namespace App\Traits;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Hidden;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Grid;
use Filament\Schemas\Schema;

trait useRepeatFormFilament
{
    /**
     * Form to card slide
     * @param Schema $schema
     * @param string $pageId
     * @return Schema
     */
    public static function repeatFormCardSlide(Schema $schema, string $pageId): Schema
    {
        return $schema
            ->components([
                Hidden::make('page_id')
                    ->default($pageId)
                    ->required(),
                RichEditor::make('title')
                    ->label('Título')
                    ->required()
                    ->toolbarButtons([
                        'textColor'
                    ])
                    ->textColors([
                        '#deff22' => 'Verde',
                    ])
                    ->placeholder('Ej: INSPECCIÓN EÓLICA')
                    ->columnSpanFull(),
                Textarea::make('description')
                    ->label('Descripción')
                    ->required()
                    ->rows(3)
                    ->columnSpanFull(),
                FileUpload::make('image')
                    ->label('Imagen de fondo')
                    ->image()
                    ->maxSize(2048) // 2MB
                    ->directory('card-slides')
                    ->required()
                    ->columnSpanFull(),
            ]);
    }
}
