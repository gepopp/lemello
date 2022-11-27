<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DIN5008BillController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('language/{language}', function ($language) {
    Session()->put('locale', $language);
    return redirect()->back();
})->name('language');

Route::get('/', function () {
    return Inertia::render('Auth/Login', [
        'background' => asset('images/fruits.svg'),
    ]);
});

Route::middleware([ 'auth:sanctum', config('jetstream.auth_session'), 'verified', ])->group(function () {

    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');


    Route::get('/subscribe', [ \App\Http\Controllers\SubscriptionsController::class, 'susbcribe' ])->name('subscribe');
    Route::post('/subscribe', [ \App\Http\Controllers\SubscriptionsController::class, 'store' ])->name('subscribe.store');
    Route::get('/subscription', [ \App\Http\Controllers\SubscriptionsController::class, 'subscription' ])->name('subscription');
    Route::get('subscription/invoice/{invoice}', [ \App\Http\Controllers\PdfController::class, 'subscriptionInvoice' ])->name('subscription.invoice');

    Route::resource('contact', 'App\Http\Controllers\ContactController');
    Route::resource('timetrack', 'App\Http\Controllers\TimeRecordController');
    Route::get('load/timetrack', [ 'App\Http\Controllers\TimeRecordController', 'loadIndex' ])->name('timetrack.loadIndex');

    Route::get('countries', function () {
        return \App\Models\Country::all();
    })->name('countries');

    Route::get('company', function () {
        return \App\Models\Contact::isCompany()
                                  ->where('name', 'LIKE', '%' . request()->search . '%')
                                  ->filter(\Illuminate\Support\Facades\Request::only('tracks'))
                                  ->limit(5)
                                  ->get();
    })->name('company.search');

    Route::get('employees/{contact}', function (\App\Models\Contact $contact) {
        return $contact->contacts;
    })->name('employees');

});


Route::get('terms', function () {
    return 'terms to come';
})->name('terms.show');


Route::get('/notification', function () {

    return (new \Illuminate\Auth\Notifications\VerifyEmail())
        ->toMail(\App\Models\User::first());
});


Route::get('pdf/{account}/{subscription_invoice}', DIN5008BillController::class);


