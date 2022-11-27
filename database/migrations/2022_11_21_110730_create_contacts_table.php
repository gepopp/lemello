<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;



return new class extends Migration {





	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {

		Schema::create( 'contacts', function ( Blueprint $table ) {

			$table->id();
			$table->foreignIdFor( \App\Models\Account::class );
			$table->foreignIdFor( \App\Models\User::class );
			$table->foreignIdFor( \App\Models\Contact::class )->nullable();
            $table->unsignedInteger('customer_number')->default(1);
            $table->boolean('is_company')->default(false);
			$table->string('gender')->nullable();
			$table->string('academic_degree')->nullable();
			$table->string('name');
			$table->string('academic_degree_after')->nullable();
			$table->string('position')->nullable();
			$table->string('phone')->nullable();
			$table->string('email')->nullable();
            $table->string('fnb')->nullable();
            $table->string('vat_id')->nullable();
			$table->softDeletes();
			$table->timestamps();
		} );
	}





	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {

		Schema::dropIfExists( 'contacts' );
	}
};
