<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function dashboard()
    {
        return Inertia::render('Dashboard');
    }
}

// return Inertia::render('Profile/Edit', [
//     'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
//     'status' => session('status'),
// ]);
