<?php

namespace App\Http\Requests;

use Carbon\Carbon;
use App\Models\Contact;
use Illuminate\Foundation\Http\FormRequest;

class StoreTimeRecordRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->check();
    }


    /**
     * Prepare the data for validation.
     *
     * @return void
     */
    protected function prepareForValidation()
    {
        $exp = explode(':', request()->duration);
        $minutes = $exp[0] * 60 + $exp[1];


        $this->merge([
            'account_id'         => auth()->user()->account->id,
            'user_id'            => auth()->id(),
            'timetrackable_type' => request()->has('contact_id') ? Contact::class : null,
            'timetrackable_id'   => request()->contact_id,
            'minutes'            => $minutes
        ]);
    }


    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'account_id'         => [ 'required' ],
            'user_id'            => [ 'required' ],
            'timetrackable_type' => [ 'nullable', 'string' ],
            'timetrackable_id'   => [ 'nullable', 'numeric' ],
            'minutes'            => [ 'nullable', 'numeric' ],
            'note'               => [ 'required', 'string' ],
        ];
    }
}
