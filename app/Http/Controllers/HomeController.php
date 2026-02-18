<?php

namespace App\Http\Controllers;

use App\Models\Page;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    //
    public function __invoke()
    {

        $page = Page::where('title', 'Inicio')->first();

        return inertia('home', [
            'banner' => $page->banner,
            'cardAccordeons' => $page->cardAccordeons,
            'cardSlides' => $page->cardSlides,
            'otherServices' => $page->otherServices,
        ]);
    }
}
