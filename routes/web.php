<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\MethodologyController;
use App\Http\Controllers\ServicesController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', HomeController::class)->name('home');
Route::get('/metodologia', MethodologyController::class)->name('metodologia');
Route::get('/servicios', ServicesController::class)->name('servicios');
