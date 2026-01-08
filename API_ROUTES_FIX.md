# API Routes Fix - Documentation

## The Problem
The Todo App was returning a **404 (Not Found)** error when trying to POST to `/api/todos`:
```
POST http://learningvue.test/api/todos 404 (Not Found)
```

This occurred because the API routes were not being properly registered in Laravel's routing configuration.

## Root Cause
In `bootstrap/app.php`, the application only had web routes configured:
```php
->withRouting(
    web: __DIR__.'/../routes/web.php',
    commands: __DIR__.'/../routes/console.php',
    health: '/up',
)
```

Laravel didn't know where to find or how to load the API routes, so requests to `/api/todos` resulted in 404 errors.

## The Solution
Two files were updated:

### 1. Created `routes/api.php`
This file defines all API endpoints using Laravel's `apiResource()` helper:
```php
<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\TodoController;

Route::apiResource('todos', TodoController::class);
```

The `apiResource()` automatically creates these routes:
- `GET /api/todos` - List all todos
- `POST /api/todos` - Create a new todo
- `GET /api/todos/{id}` - Get a specific todo
- `PUT /api/todos/{id}` - Update a todo
- `DELETE /api/todos/{id}` - Delete a todo

### 2. Updated `bootstrap/app.php`
Added the `api` configuration to tell Laravel where API routes are located:
```php
->withRouting(
    web: __DIR__.'/../routes/web.php',
    api: __DIR__.'/../routes/api.php',  // <- Added this line
    commands: __DIR__.'/../routes/console.php',
    health: '/up',
)
```

## Why This Works
When you specify `api: __DIR__.'/../routes/api.php'` in `bootstrap/app.php`:

1. **Route Registration** - Laravel registers all routes defined in `api.php`
2. **Automatic Prefix** - Laravel automatically prefixes them with `/api/`
3. **Middleware Applied** - The `api` middleware group is automatically applied
4. **JSON Responses** - API responses are formatted as JSON by default

## What the TodoController Does
The `TodoController` in `app/Http/Controllers/Api/TodoController.php` handles all these API requests:
- Fetches todos from the database
- Creates new todos
- Updates todo completion status
- Deletes todos

It uses the `Todo` model which is connected to the `todos` table in SQLite.

## Verification
After the fix, todos can be:
1. ✅ Added via the Todo App UI
2. ✅ Stored in the SQLite database
3. ✅ Retrieved and displayed
4. ✅ Updated (marked complete/incomplete)
5. ✅ Deleted

## Key Takeaway
In Laravel 11+, always ensure `bootstrap/app.php` has both:
- `web: ...` for web routes (HTML responses)
- `api: ...` for API routes (JSON responses)

Without registering the API routes, Laravel cannot find your API endpoints!
