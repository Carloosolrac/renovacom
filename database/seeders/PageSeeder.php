<?php

namespace Database\Seeders;

use App\Models\Page;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class PageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        // Disable foreign key checks to allow truncating the table without issues
        Schema::disableForeignKeyConstraints();

        Page::truncate();

        Schema::enableForeignKeyConstraints();

        $pages = [
            ['title' => 'Inicio'],
            ['title' => 'Metodología'],
            ['title' => 'Servicios'],
        ];

        Page::insert($pages);
    }
}
