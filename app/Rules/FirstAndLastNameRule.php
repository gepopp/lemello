<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class FirstAndLastNameRule implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        return preg_match('/^[A-Z][a-zA-Z-]{3,30} [A-Z][a-zA-Z-]{3,30}$/', $value);
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'Bitte gib hier deinen Vor- und Nachnamen ein. Erlaubt sind zwei Worte beginnend mit Großbuchstaben und bestehend aus Buchstaben und Bindestrichen.';
    }
}
