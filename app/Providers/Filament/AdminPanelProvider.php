<?php

namespace App\Providers\Filament;

use App\Filament\Pages\SettingsPage;
use Filament\Http\Middleware\Authenticate;
use Filament\Http\Middleware\AuthenticateSession;
use Filament\Http\Middleware\DisableBladeIconComponents;
use Filament\Http\Middleware\DispatchServingFilamentEvent;
use Filament\Pages\Dashboard;
use Filament\Panel;
use Filament\PanelProvider;
use Filament\Support\Colors\Color;
use Filament\Support\Enums\MaxWidth;
use Filament\Widgets\AccountWidget;
use Filament\Widgets\FilamentInfoWidget;
use Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse;
use Illuminate\Cookie\Middleware\EncryptCookies;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken;
use Illuminate\Routing\Middleware\SubstituteBindings;
use Illuminate\Session\Middleware\StartSession;
use Illuminate\View\Middleware\ShareErrorsFromSession;
use Outerweb\FilamentSettings\SettingsPlugin;

class AdminPanelProvider extends PanelProvider
{
    public function panel(Panel $panel): Panel
    {
        return $panel
            ->default()
            ->id('admin')
            ->path('admin')
            ->login()
            ->brandName('Renovacom')
            ->brandLogo(asset('assets/logo.png'))
            ->brandLogoHeight('2.5rem')
            ->favicon(asset('assets/logo.png'))
            ->colors([
                'primary' => [
                    50 => '#f9ffe6',
                    100 => '#f0ffbf',
                    200 => '#e5ff8a',
                    300 => '#deff22', // Color principal verde lima
                    400 => '#c9e600',
                    500 => '#a8c200',
                    600 => '#82990a',
                    700 => '#5f7210',
                    800 => '#4a5a14',
                    900 => '#3d4c15',
                    950 => '#1e2a06',
                ],
                'gray' => [
                    50 => '#f8feff',  // Background color
                    100 => '#e8f4f7',
                    200 => '#c7e3ea',
                    300 => '#96ccd8',
                    400 => '#5db0c1',
                    500 => '#3d93a6',
                    600 => '#32788c',
                    700 => '#2d6173',
                    800 => '#0c4557', // Color negro/azul oscuro
                    900 => '#063545',
                    950 => '#042330',
                ],
                'danger' => Color::Rose,
                'info' => Color::Cyan,
                'success' => [
                    50 => '#f0fdf4',
                    100 => '#dcfce7',
                    200 => '#bbf7d0',
                    300 => '#86efac',
                    400 => '#4ade80',
                    500 => '#22c55e',
                    600 => '#16a34a',
                    700 => '#15803d',
                    800 => '#166534',
                    900 => '#14532d',
                    950 => '#052e16',
                ],
                'warning' => Color::Amber,
            ])
            // ->font('Work Sans')
            ->sidebarCollapsibleOnDesktop()
            // ->sidebarWidth('17rem')
            ->collapsedSidebarWidth('4.5rem')
            ->globalSearchKeyBindings(['command+k', 'ctrl+k'])
            ->plugins([
                SettingsPlugin::make()
                    ->pages([
                        SettingsPage::class
                    ])
            ])
            ->discoverResources(in: app_path('Filament/Resources'), for: 'App\Filament\Resources')
            ->discoverPages(in: app_path('Filament/Pages'), for: 'App\Filament\Pages')
            ->pages([
                Dashboard::class,
            ])
            ->discoverWidgets(in: app_path('Filament/Widgets'), for: 'App\Filament\Widgets')
            ->widgets([
                AccountWidget::class,
            ])
            ->middleware([
                EncryptCookies::class,
                AddQueuedCookiesToResponse::class,
                StartSession::class,
                AuthenticateSession::class,
                ShareErrorsFromSession::class,
                VerifyCsrfToken::class,
                SubstituteBindings::class,
                DisableBladeIconComponents::class,
                DispatchServingFilamentEvent::class,
            ])
            ->authMiddleware([
                Authenticate::class,
            ]);
    }
}
