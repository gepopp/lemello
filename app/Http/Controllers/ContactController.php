<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Contact;
use App\Models\Address;
use Illuminate\Support\Facades\Request;
use App\Http\Requests\StoreContactRequest;

class ContactController extends Controller
{

    public function index()
    {
        return Inertia::render('Contacts/ContactIndex', [
            'contacts' => Contact::filter(Request::only('search'))->orderBy('name')->paginate(10)
        ]);
    }


    public function create()
    {
        return Inertia::render('Contacts/ContactCreate', [
            'companies' => Contact::IsCompany()->get(),
        ]);
    }


    public function store(StoreContactRequest $request)
    {

        $address_fields = app(Address::class )->getFillable();

        $contact = Contact::create( $request->safe()->except( $address_fields ));
        $address =  new Address( $request->safe()->only($address_fields));

        $contact->address()->save( $address );

        return redirect()->route('contact.index');
    }


    public function show(Contact $contact){

        return Inertia::render('Contacts/ContactShow', compact('contact'));
    }


    public function edit(Contact $contact){
        return Inertia::render('Contacts/ContactEdit', compact('contact'));
    }


    public function update( Contact $contact, StoreContactRequest $request ){


        $address_fields = app(Address::class )->getFillable();

        $contact->update( $request->safe()->except( $address_fields ));
        $contact->address->update( $request->safe()->only($address_fields));

        return redirect()->route('contact.show', compact('contact'));


    }

}
