<?php

namespace App\Http\Requests;


use Illuminate\Foundation\Http\FormRequest;




class StoreProjectRequest extends FormRequest
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
        ]);
    }




    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {

        return true;
    }




    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {

        return [
            'account_id'  => [ 'required' ],
            'user_id'     => [ 'required' ],
            'contact_id'  => [ 'exists:contacts' ],
            'name'        => [ 'required', 'string', 'max:250' ],
            'description' => [ 'nullable', 'string', 'max:1200' ],
        ];
    }
}
