<?php

namespace App\Http\Controllers;


use Inertia\Inertia;
use App\Models\Contact;
use App\Models\Address;
use App\Models\Project;
use Illuminate\Support\Facades\Request;
use App\Http\Requests\StoreContactRequest;




class ContactController extends Controller
{

    public function index()
    {

        return Inertia::render('Contacts/ContactIndex', [
            'contacts' => Contact::filter(Request::only('search'))->orderBy('name')->paginate(10),
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

        $address_fields = app(Address::class)->getFillable();

        $contact = Contact::create($request->safe()->except($address_fields));
        $address = new Address($request->safe()->only($address_fields));

        $contact->address()->save($address);

        return redirect()->route('contact.index');
    }




    public function show(Contact $contact)
    {

        $project_count = Project::where('contact_id', $contact->id)->count();

        return Inertia::render('Contacts/ContactShow', compact('contact', 'project_count'));
    }




    public function employees(Contact $contact)
    {

        return $contact->contacts;
    }




    public function projects(Contact $contact)
    {

        return $contact->projects;
    }




    public function customer()
    {

        return \App\Models\Contact::where('name', 'LIKE', '%' . request()->search . '%')
                                  ->filter(\Illuminate\Support\Facades\Request::only('tracks'))
                                  ->limit(5)
                                  ->get();
    }




    public function edit(Contact $contact)
    {

        return Inertia::render('Contacts/ContactEdit', compact('contact'));
    }




    public function update(Contact $contact, StoreContactRequest $request)
    {

        $address_fields = app(Address::class)->getFillable();

        $contact->update($request->safe()->except($address_fields));
        $contact->address->update($request->safe()->only($address_fields));

        return redirect()->route('contact.show', compact('contact'));

    }




    public function destroy(Contact $contact)
    {

        $contact->delete();

        return redirect()->route('contact.index');
    }

}
