<?php

namespace App\Http\Requests;

use App\Models\Contact;
use Illuminate\Validation\Rule;


class StoreContactRequest extends AddressableRequest
{


    /**
     * Prepare the data for validation.
     *
     * @return void
     */
    protected function prepareForValidation()
    {

        $this->merge([
            'account_id' => auth()->user()->account->id,
            'user_id'    => auth()->id(),
            'contact_id' => request()->contact_id ?: null
        ]);
    }

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {

        return auth()->check();
    }


    protected function addRules(): array
    {

        return [
            'account_id'            => [ 'required' ],
            'user_id'               => [ 'required' ],
            'is_company'            => [ 'required', 'boolean' ],
            'gender'                => [ Rule::requiredIf(fn() => request()->is_company == false),
                                         Rule::when(fn() => request()->is_company == false,
                                             Rule::in([ 'male', 'female', 'divers' ])) ],
            'academic_degree'       => [ 'nullable', 'string', 'max:200' ],
            'name'                  => [ 'nullable', 'string', 'max:200' ],
            'academic_degree_after' => [ 'nullable', 'string', 'max:200' ],
            'position'              => [ 'nullable', 'string', 'max:200' ],
            'fnb'                   => [ 'nullable', 'string', 'max:200' ],
            'vat_id'                => [ 'nullable', 'string', 'max:200' ],
            'email'                 => [
                'required',
                'email:dns,rfc',
            ],
            'phone'                 => [ 'nullable', 'numeric' ],
            'contact_id'            => [ 'nullable', 'numeric', Rule::in(Contact::isCompany()->get()->pluck('id')) ],
        ];
    }


    public function messages()
    {

        return [
            'email.unique' => __('A Company with this Email address already exists.'),
        ];
    }


    protected function addAttributes(): array
    {

        return [
            'fnb'    => __('Company Register Number'),
            'vat_id' => __('Vat Id'),
        ];
    }
}
