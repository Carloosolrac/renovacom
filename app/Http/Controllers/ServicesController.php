<?php

namespace App\Http\Controllers;

use App\Models\Page;

class ServicesController extends Controller
{
    public function __invoke()
    {
        $page = Page::where('title', 'Servicios')->first();

        return inertia('services', [
            'banner' => $page->banner,
            'cardSlides' => $page->cardSlides ?? [],
            'serviceArticles' => $page->serviceArticles ?? [],
        ]);
    }
}
