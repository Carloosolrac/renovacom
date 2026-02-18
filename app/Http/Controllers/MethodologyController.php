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
        ]);
    }
}
