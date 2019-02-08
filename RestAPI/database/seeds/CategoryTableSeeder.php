<?php

use Illuminate\Database\Seeder;
use App\Category;

class CategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $category = Category::create(['name' => 'Manga Corta']);
        $category = Category::create(['name' => 'Manga Larga']);
        $category = Category::create(['name' => 'Meme']);

        $category = Category::create(['name' => 'Colorida']);
        $category = Category::create(['name' => 'Television']);
        $category = Category::create(['name' => 'Anime']);

        $category = Category::create(['name' => 'Unicolor']);
        $category = Category::create(['name' => 'Infantil']);
        $category = Category::create(['name' => 'Bebe']);
    }
}
