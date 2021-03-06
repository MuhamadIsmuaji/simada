<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\koreksi_detil;
use Faker\Generator as Faker;

$factory->define(koreksi_detil::class, function (Faker $faker) {

    return [
        'title' => $faker->word,
        'created_at' => $faker->date('Y-m-d H:i:s'),
        'updated_at' => $faker->date('Y-m-d H:i:s')
    ];
});
