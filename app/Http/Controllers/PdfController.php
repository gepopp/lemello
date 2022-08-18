<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SubscriptionInvoice;
use Spatie\Browsershot\Browsershot;



class PdfController extends Controller
{


    public function subscriptionInvoice( SubscriptionInvoice $invoice){

        $html = view('pdf.subscription-invoice')->render();

        Browsershot::html($html)->save('invoice.pdf');

        return 'done';
    }


}

