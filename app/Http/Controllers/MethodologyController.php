<?php

namespace App\Http\Controllers;

use App\Models\Page;

class MethodologyController extends Controller
{
    public function __invoke()
    {
        $page = Page::where('title', 'Metodología')->first();
        return inertia('methodology', [
            'banner' => $page->banner,
            'cardAccordeonDowns' => $page->cardAccordeonDowns,
            'seo' => [
                'title' => setting('methodology.title'),
                'description' => setting('methodology.description'),
            ],
            'article' => [
                'image' => setting('methodology.article_image'),
                'left_text' => setting('methodology.article_left_text'),
                'right_text' => setting('methodology.article_right_text'),
            ]
        ]);
    }
}
