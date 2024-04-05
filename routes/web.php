<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\Admin\ProfileController;
use App\Http\Controllers\Admin\InvoiceController;
use App\Http\Controllers\Admin\DashboardController;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::redirect('/','/dashboard');
Route::get('/dashboard',[DashboardController::class,'dashboard'])->middleware(['auth', 'verified'])->name('dashboard');
// Route::get('/dashboard',[DashboardController::class,'dashboard'])->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {

    Route::get('/invoice', [InvoiceController::class, 'index'])->name('admin.invoice');
    Route::get('/invoice/create', [InvoiceController::class, 'create'])->name('admin.invoice.create');
    // Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    // Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    // Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
// require __DIR__.'/admin.php';

// Route::get('change_locale/{lang}','HomeController@change_locale')->name('change_locale');

Route::get('dashboard/clear-cache',function(){
//   \Artisan::call('cache:clear');
//   \Artisan::call('config:clear');
//   \Artisan::call('view:clear');
    $data = [];
    $clearcache = Artisan::call('cache:clear');
    echo "Cache cleared<br>";

    $clearview = Artisan::call('view:clear');
    echo "View cleared<br>";

    $clearconfig = Artisan::call('config:cache');
    echo "Config cleared<br>";

    // $clearcache = Artisan::call('comment:route');
    // echo "Play replaced<br>";
});


// admin route
// Route::group(['prefix'=>'admin','as'=>'admin.','namespace'=>'Admin','middleware'=>'Admin'],function(){
Route::group(['prefix'=>'admin','as'=>'admin.','namespace'=>'Admin'],function(){
    //profile
    Route::group(['prefix'=>'profile','as'=>'profile.'],function(){
        Route::get('edit', [ProfileController::class, 'edit'])->name('edit');
        Route::post('update', [ProfileController::class, 'update'])->name('update');
    });

        //reports
        Route::resource('reports','ReportsController');
        // Route::post('reports/pdf/{id}','ReportsController@pdf')->name('reports.pdf');
        // Route::post('reports/update_culture/{id}','ReportsController@update_culture')->name('reports.update_culture');//update cultures
        // Route::get('get_reports','ReportsController@ajax')->name('get_reports');
        // Route::get('sign_report/{id}','ReportsController@sign')->name('reports.sign');
        // Route::post('reports/send_report_mail/{id}','ReportsController@send_report_mail')->name('reports.send_report_mail');
});
