<?php

namespace App\Http\Requests;

use App\Models\Country;
use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;


abstract class AddressableRequest extends FormRequest
{


    abstract protected function addRules(): array;

    abstract protected function addAttributes(): array;





    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {

        return array_merge([
            'line_1'     => [ 'required', 'string', 'max:200' ],
            'line_2'     => [ 'nullable', 'string', 'max:200' ],
            'zip'        => [ 'required', 'numeric' ],
            'city'       => [ 'required', 'string', 'max:200' ],
            'country_id' => [ 'required', Rule::in(Country::all()->pluck('id')) ],
        ], $this->addRules());
    }


    public function attributes()
    {

        return array_merge([
            'line_1'     => __('Address'),
            'line_2'     => __('Address Line 2'),
            'zip'        => __('Zip / Postal Code'),
            'country_id' => __('Country'),
        ], $this->addAttributes());
    }


}
