<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        if (App::Environment() === 'local')
        {
            
            $this->call(CategoryTableSeeder::class);
            $this->call(UserTableSeeder::class);
            $this->call(ProductTableSeeder::class);
            
        }
    }
}
