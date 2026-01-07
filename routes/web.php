<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\TodoController;

Route::get('/', function () {
    return view('welcome');
});

// API Routes for Todo
Route::apiResource('api/todos', TodoController::class);
