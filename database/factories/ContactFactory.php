<?php

namespace Database\Factories;

use App\Models\Contact;
use App\Models\Address;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Contact>
 */
class ContactFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {

        $is_company = fake()->boolean;

        return [
            'account_id'      => 1,
            'user_id'         => 1,
            'customer_number' => Contact::max('customer_number') + 1,
            'is_company'      => $is_company,
            'gender'          => $is_company ? null : fake()->randomElement([ 'male', 'female', 'divers' ]),
            'academic_degree' => fake()->jobTitle,
            'name'            => fake()->name,
            'position'        => fake()->jobTitle,
            'phone'           => fake()->phoneNumber,
            'email'           => fake()->email,
            'fnb'             => fake()->companySuffix,
        ];
    }
}
