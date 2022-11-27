<?php

namespace App\Providers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Laravel\Fortify\Fortify;
use App\Actions\Fortify\CreateNewUser;
use Illuminate\Support\ServiceProvider;
use Illuminate\Cache\RateLimiting\Limit;
use App\Actions\Fortify\ResetUserPassword;
use App\Actions\Fortify\UpdateUserPassword;
use Illuminate\Support\Facades\RateLimiter;
use App\Actions\Fortify\UpdateUserProfileInformation;



class FortifyServiceProvider extends ServiceProvider {





	/**
	 * Register any application services.
	 *
	 * @return void
	 */
	public function register() {
		//
	}





	/**
	 * Bootstrap any application services.
	 *
	 * @return void
	 */
	public function boot() {

		Fortify::registerView( function () {
			return Inertia::render( 'Auth/Register', [
				'background' => asset( 'images/fruits.svg' ),
			] );
		} );

		Fortify::verifyEmailView( function () {
			return Inertia::render( 'Auth/VerifyEmail', [
				'background' => asset( 'images/fruits.svg' ),
				'status'     => session( 'status' ),
			] );
		} );


		Fortify::requestPasswordResetLinkView( function (){
			return Inertia::render( 'Auth/ForgotPassword', [
				'background' => asset( 'images/fruits.svg' ),
				'status'     => session( 'status' ),
			] );
		});


		Fortify::resetPasswordView( function (){
			return Inertia::render( 'Auth/ResetPassword', [
				'background' => asset( 'images/fruits.svg' ),
				'status'     => session( 'status' ),
			] );
		});


		Fortify::createUsersUsing( CreateNewUser::class );
		Fortify::updateUserProfileInformationUsing( UpdateUserProfileInformation::class );
		Fortify::updateUserPasswordsUsing( UpdateUserPassword::class );
		Fortify::resetUserPasswordsUsing( ResetUserPassword::class );

		RateLimiter::for( 'login', function ( Request $request ) {

			$email = (string) $request->email;

			return Limit::perMinute( 5 )->by( $email . $request->ip() );
		} );

		RateLimiter::for( 'two-factor', function ( Request $request ) {

			return Limit::perMinute( 5 )->by( $request->session()->get( 'login.id' ) );
		} );
	}
}
