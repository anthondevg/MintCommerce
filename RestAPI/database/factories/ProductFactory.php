<?php

use Faker\Generator as Faker;

use App\Product;


$factory->define(Product::class, function (Faker $faker) {
	
	$products = ["Camisa nike","Camisa Beige","Franela colorida","Franela de rayas",
			"Camisa de cuadros","Camisa doble uso","Camisa de Fuerza","Camisa de dragon ball","franelilla deportiva"];
    $arrProducLength = sizeof($products);
    return [
        'category_id' => $faker->numberBetween(1,9),
        'name' => $products[$faker->numberBetween(0,$arrProducLength - 1)],
        'description' => $faker->realText(30),
        'price' => $faker->numberBetween(1,99.99),
        'stock' => $faker->numberBetween(1,200),
    	'offer' => $faker->numberBetween(1,20),
    	'date' => $faker->date
    ];
});
