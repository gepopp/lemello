<?php


use Inertia\Inertia;
use Illuminate\Support\Facades\Route;




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
    Route::get('customer', [ \App\Http\Controllers\ContactController::class, 'customer' ])->name('customer.search');
    Route::get('employees/{contact}', [ \App\Http\Controllers\ContactController::class, 'employees' ])->name('employees');
    Route::get('customer/{contact}/projects', [\App\Http\Controllers\ContactController::class, 'projects'] )->name('contact.projects');

    Route::resource('timetrack', 'App\Http\Controllers\TimeRecordController');
    Route::get('load/timetrack', [ 'App\Http\Controllers\TimeRecordController', 'loadIndex' ])->name('timetrack.loadIndex');
    Route::get('timetrackable/{timetrack}', [ \App\Http\Controllers\TimeRecordController::class, 'timetrackable' ])->name('timetrackable');

    Route::resource('project', \App\Http\Controllers\ProjectController::class);
    Route::get('load/projects', [ 'App\Http\Controllers\ProjectController', 'loadIndex' ])->name('projects.loadIndex');
    Route::get('projectsearch', [ \App\Http\Controllers\ProjectController::class, 'search'])->name('project.search');

    Route::get('countries', function () {

        return \App\Models\Country::all();
    })->name('countries');

});

Route::resource('customer/{customer}/customer-page', \App\Http\Controllers\CustomerPageController::class);

Route::get('terms', function () {

    return 'terms to come';
})->name('terms.show');
