<?php

Route::get('clear-cache',function(){
    \Artisan::call('cache:clear');
    \Artisan::call('config:clear');
    \Artisan::call('view:clear');
  });
?>
