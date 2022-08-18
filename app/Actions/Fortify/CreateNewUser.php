<?php

namespace App\Actions\Fortify;

use App\Models\User;
use App\Models\Account;
use Laravel\Jetstream\Jetstream;
use App\Rules\FirstAndLastNameRule;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Laravel\Fortify\Contracts\CreatesNewUsers;



class CreateNewUser implements CreatesNewUsers {





    use PasswordValidationRules;



    /**
     * Validate and create a newly registered user.
     *
     * @param array $input
     *
     * @return \App\Models\User
     */
    public function create( array $input ) {

        Validator::make( $input, [
            'account_name' => 'required|string|max:255',
            'name'         => [ 'required', 'string', 'max:255', new FirstAndLastNameRule() ],
            'email'        => [ 'required', 'string', 'email', 'max:255', 'unique:users' ],
            'password'     => $this->passwordRules(),
            'terms'        => Jetstream::hasTermsAndPrivacyPolicyFeature() ? [ 'accepted', 'required' ] : '',
        ], [
            'email.unique' => 'Diese E-Mail-Adresse ist bereits registriert.'
        ])->validate();

        $account = Account::create( [ 'name' => $input['account_name'] ] );

        return User::create( [
            'account_id' => $account->id,
            'name'       => $input['name'],
            'email'      => $input['email'],
            'password'   => Hash::make( $input['password'] ),
        ] );
    }
}
