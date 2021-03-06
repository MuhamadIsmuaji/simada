<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\inventaris_sensus;
use Faker\Generator as Faker;

$factory->define(inventaris_sensus::class, function (Faker $faker) {

    return [
        'idinventaris' => $faker->word,
        'kondisi' => $faker->word,
        'created_at' => $faker->word,
        'updated_at' => $faker->word
    ];
});
