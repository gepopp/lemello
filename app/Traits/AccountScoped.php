<?php

namespace App\Traits;

use App\Models\User;
use App\Models\Account;
use App\Models\Scopes\AccountScope;



trait AccountScoped {





	protected static function booted() {

		static::addGlobalScope( new AccountScope );
	}


	public function account() {

		return $this->belongsTo( Account::class );
	}





	public function user() {

		return $this->belongsTo( User::class );
	}




}