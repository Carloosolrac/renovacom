<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MethodologyController extends Controller
{
    //
    public function __invoke()
    {
        return inertia('methodology');
    }
}
