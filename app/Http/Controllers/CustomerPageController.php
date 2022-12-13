<?php

namespace App\Http\Controllers;


use Inertia\Inertia;
use App\Models\Contact;
use Illuminate\Support\Str;
use App\Models\CustomerPage;
use Illuminate\Http\Request;
use App\Http\Requests\StoreCustomerPageRequest;
use App\Http\Requests\UpdateCustomerPageRequest;




class CustomerPageController extends Controller
{

    /**
     * Store a newly created resource in storage.
     *
     * @param \App\Http\Requests\StoreCustomerPageRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(Contact $customer)
    {

        if (!auth()->check()) {
            abort(401);
        }

        return CustomerPage::create([
            'account_id' => auth()->user()->account->id,
            'user_id'    => auth()->id(),
            'contact_id' => $customer->id,
        ]);
    }




    /**
     * Display the specified resource.
     *
     * @param \App\Models\CustomerPage $customerPage
     * @return \Inertia\Response
     */
    public function show(Contact $customer, CustomerPage $customer_page)
    {

        return Inertia::render('Customer/CustomerPage',
            [
                'background' => asset('images/fruits.svg'),
                'customer'   => $customer,
            ]);
    }




    /**
     * Update the specified resource in storage.
     *
     * @param \App\Http\Requests\UpdateCustomerPageRequest $request
     * @param \App\Models\CustomerPage $customerPage
     * @return CustomerPage
     */
    public function update(Request $request, Contact $customer, CustomerPage $customer_page)
    {

        $customer_page->update([
            'slug' => Str::uuid(),
        ]);

        return $customer_page->fresh();
    }




    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\CustomerPage $customerPage
     * @return \Illuminate\Http\Response
     */
    public function destroy(CustomerPage $customer_page)
    {

        return $customer_page->delete();
    }
}
