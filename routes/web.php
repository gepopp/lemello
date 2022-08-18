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

Route::get( '/', function () {

    return Inertia::render( 'Auth/Login' );
} );

Route::middleware( [
    'auth:sanctum',
    config( 'jetstream.auth_session' ),
    'verified',
] )->group( function () {

    Route::get( '/dashboard', function () {

        return Inertia::render( 'Dashboard' );
    } )->name( 'dashboard' );


    Route::get( '/subscribe', [ \App\Http\Controllers\SubscriptionsController::class, 'susbcribe' ] )->name( 'subscribe' );
    Route::post('/subscribe', [ \App\Http\Controllers\SubscriptionsController::class, 'store'])->name('subscribe.store');
    Route::get( '/subscription', [ \App\Http\Controllers\SubscriptionsController::class, 'subscription' ] )->name( 'subscription' );


    Route::get('subscription/invoice/{invoice}', [ \App\Http\Controllers\PdfController::class, 'subscriptionInvoice'])->name('subscription.invoice');
} );


Route::get('terms', function (){
   return 'terms to come';
})->name('terms.show');

Route::get( '/notification', function () {

    return ( new \Illuminate\Auth\Notifications\VerifyEmail() )
        ->toMail( \App\Models\User::first() );
} );


Route::get('pdf', function (\Codedge\Fpdf\Fpdf\Fpdf $fpdf){
    $fpdf->AddPage();
    $fpdf->SetFont('Arial', 'B', 18);
    $fpdf->Cell(50, 25, 'Hello World!');
    $fpdf->Output();
    exit;
});
