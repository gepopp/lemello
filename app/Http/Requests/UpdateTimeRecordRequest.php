<?php

namespace App\Http\Requests;


use Carbon\Carbon;
use Illuminate\Foundation\Http\FormRequest;




class UpdateTimeRecordRequest extends FormRequest
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




    protected function prepareForValidation()
    {

        $exp = explode(':', request()->duration);
        $minutes = $exp[0] * 60 + $exp[1];


        $this->merge([
            'account_id' => auth()->user()->account->id,
            'user_id'    => auth()->id(),
            'minutes'    => $minutes,
            'started_at' => request()->has('created_at') ? Carbon::parse(request()->created_at) : now(),
            'ended_at'   => request()->has('created_at') ? Carbon::parse(request()->created_at)->addMinutes($minutes) : now()->addMinutes($minutes),
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
            'started_at'         => [ 'nullable' ],
            'ended_at'           => [ 'nullable' ],
        ];
    }
}
