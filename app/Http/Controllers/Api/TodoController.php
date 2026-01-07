<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Todo;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class TodoController extends Controller
{
    /**
     * Display a listing of all todos.
     */
    public function index()
    {
        return response()->json(Todo::orderBy('created_at', 'desc')->get());
    }

    /**
     * Store a newly created todo in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'text' => 'required|string|max:255',
            'completed' => 'sometimes|boolean'
        ]);

        $todo = Todo::create($validated);
        return response()->json($todo, Response::HTTP_CREATED);
    }

    /**
     * Display the specified todo.
     */
    public function show(Todo $todo)
    {
        return response()->json($todo);
    }

    /**
     * Update the specified todo in storage.
     */
    public function update(Request $request, Todo $todo)
    {
        $validated = $request->validate([
            'text' => 'sometimes|string|max:255',
            'completed' => 'sometimes|boolean'
        ]);

        $todo->update($validated);
        return response()->json($todo);
    }

    /**
     * Remove the specified todo from storage.
     */
    public function destroy(Todo $todo)
    {
        $todo->delete();
        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
}

