<?php

use App\Http\Controllers\Api\ArticuloController;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\Api\ClienteController;
use App\Http\Controllers\Api\ImagenController;
use App\Http\Controllers\Api\PedidoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;





Route::controller(ClienteController::class)->group(function (){
    Route::get('/clientes', 'index');
    Route::post('/cliente', 'store');
    Route::get('/cliente/{id}', 'show');
    Route::put('/cliente/{id}', 'update');
    Route::delete('/cliente/{id}', 'destroy');
});

Route::controller(ArticuloController::class)->group(function (){
    Route::get('/articulos', 'index');
    Route::post('/articulo', 'store');
    Route::get('/articulo/{id}', 'show');
    Route::put('/articulo/{id}', 'update');
    Route::delete('/articulo/{id}', 'destroy');
    Route::get("json", 'indexPdf');
    Route::get("/count", 'count');
});

Route::controller(PedidoController::class)->group(function (){
    Route::get('/pedidos', 'index');
    Route::post('/pedido', 'store');
    Route::get('/pedido/{id}', 'show');
    Route::put('/pedido/{id}', 'update');
    Route::delete('/pedido/{id}', 'destroy');
});

Route::controller(ImagenController::class)->group(function (){
    Route::get('/imagenes', 'index');
    Route::post('/imagen', 'store');
    Route::get('/imagen/{id}', 'show');
    Route::put('/imagen/{id}', 'update');
    Route::delete('/imagen/{id}', 'destroy');
});

Route::post('login', [AuthController::class, 'signin']);
Route::post('register', [AuthController::class, 'signup']);
     
Route::middleware('auth:sanctum')->group( function () {
    Route::resource('blogs', BlogController::class);
});

