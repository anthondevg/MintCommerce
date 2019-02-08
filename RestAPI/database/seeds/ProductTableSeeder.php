<?php

use Illuminate\Database\Seeder;
use App\Product;

class ProductTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         $product = Product::create([
            'category_id' => 1,
        	'name' => 'Camisa Negra', 
        	'description' => 'Una camisa negra porque negra tengo el alma.',
        	'price' => 99.99,
        	'stock' => 12,
        	'offer' => 20,
        	'date' => '2019-02-05',
        	'image' => 'blacktshirt.jpg',

        ]);

        factory(Product::class)->times(10)->create();
    }
}
