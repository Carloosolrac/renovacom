<?php

namespace App\Http\Controllers;

use App\Models\Page;

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
            'cardStatistics' => $page->cardStatistics,
            'partnerLogos' => $page->partnerLogos,
            'seo' => [
                'title' => setting('home.title'),
                'description' => setting('home.description'),
            ],
            'article' => [
                'image' => setting('home.article_image'),
                'left_text' => setting('home.article_left_text'),
                'right_text' => setting('home.article_right_text'),
            ]
        ]);
    }
}
