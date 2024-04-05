<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class InvoiceController extends Controller
{
    public function index()
    {
        return Inertia::render('Invoice/Invoice');
    }

    public function create()
    {
        return Inertia::render('Invoice/CreateInvoice');
    }
}
