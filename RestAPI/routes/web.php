<?php

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

Route::get('/', function () {
    return view('welcome');
});

//If you need to add additional routes to a resource controller beyond the default set of resource routes, you should define those routes before your call to Route::resource; otherwise, the routes defined by the resource method may unintentionally take precedence over your supplemental routes:

Route::get('products/popular','ProductController@getPopularProducts');

// resources 
Route::resources([
    'users' => 'UserController',
    'products' => 'ProductController',
    'categories' => 'CategoryController'
]);