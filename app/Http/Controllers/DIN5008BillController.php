<?php

namespace App\Http\Controllers;

use App\Models\Account;
use App\pdf\DIN5008Bill;
use App\Models\SubscriptionInvoice;



class DIN5008BillController extends Controller {





    function __invoke( Account $account, SubscriptionInvoice $subscription_invoice ) {

        $fpdf = new DIN5008Bill( 'p', 'mm', 'A4' );


        $fpdf->AddPage();
        $fpdf->senderAddress();
        $fpdf->recipientAddress( $account );
        $fpdf->metaBlock( $subscription_invoice );
        $fpdf->billTable($subscription_invoice);
        $fpdf->subject();
        $fpdf->Output();
        exit;
    }
}
