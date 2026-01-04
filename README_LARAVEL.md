# Vue.js Learning Hub - Laravel Edition

A comprehensive, interactive learning platform for mastering Vue.js from fundamentals to real-world applications, now powered by Laravel with Vue 3 Single Page Application (SPA).

## 🚀 Architecture

This project uses:
- **Backend**: Laravel (PHP framework) for routing and API endpoints
- **Frontend**: Vue.js 3 with Vue Router for client-side routing
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS v4 for responsive design

## 📚 Learning Modules

### Core Learning Modules

1. **Vue Basics** - Learn data binding, directives, computed properties
2. **Event Handling** - Master click events, form handling, and event modifiers  
3. **Lists & Loops** - Understand v-for, filtering, and sorting
4. **Components & Props** - Create reusable components with props and events
5. **Todo App** - Build a complete application with CRUD operations
6. **Code Playground** - Interactive examples and code experimentation

## 🛠️ Project Structure

```
.
├── resources/
│   ├── js/
│   │   ├── app.js                 # Main Vue app entry point
│   │   ├── App.vue                # Root component
│   │   ├── pages/                 # Page components for each route
│   │   │   ├── Home.vue
│   │   │   ├── VueBasics.vue
│   │   │   ├── EventHandling.vue
│   │   │   ├── ListsAndLoops.vue
│   │   │   ├── ComponentsAndProps.vue
│   │   │   ├── TodoApp.vue
│   │   │   └── Playground.vue
│   │   └── components/            # Reusable Vue components
│   │       ├── ButtonComponent.vue
│   │       └── CardComponent.vue
│   ├── css/
│   │   └── app.css                # Main stylesheet
│   └── views/
│       └── welcome.blade.php      # Laravel template with Vue mount point
├── routes/
│   └── web.php                    # Web routes (SPA uses client-side routing)
├── vite.config.js                 # Vite configuration with Vue plugin
└── package.json                   # Node dependencies
```

## 🚀 Getting Started

### Prerequisites
- PHP 8.2+
- Node.js 20.19+ or 22.12+
- Composer
- npm

### Installation

1. **Install PHP dependencies**
```bash
composer install
```

2. **Install JavaScript dependencies**
```bash
npm install
```

3. **Build assets for development**
```bash
npm run dev
```

4. **In another terminal, start Laravel development server**
```bash
php artisan serve
```

5. Open http://localhost:8000 in your browser

### Production Build

```bash
npm run build
```

This creates optimized assets in `public/build/` for production deployment.

## 🗺️ Routing

The application uses Vue Router for client-side routing:
- `/` - Home page
- `/vue-basics` - Vue fundamentals
- `/event-handling` - Event handling examples
- `/lists-and-loops` - List rendering and manipulation
- `/components-and-props` - Component composition
- `/todo-app` - Complete todo application
- `/playground` - Interactive code playground

## 💡 Key Features

- **Interactive Learning**: Real-time code execution and visual feedback
- **Modern Vue 3**: Composition API-ready components
- **Responsive Design**: Mobile-friendly interface with Tailwind CSS
- **Dark Mode Support**: Built-in dark theme support
- **Component Examples**: Reusable, well-documented components
- **State Management**: Local component state management examples

## 🔧 Development

### Available Commands

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `php artisan serve` - Start Laravel development server
- `php artisan migrate` - Run database migrations

### Backend Integration

To add API endpoints for more advanced features:

1. Create a controller:
```bash
php artisan make:controller Api/TodoController
```

2. Add routes in `routes/api.php`:
```php
Route::apiResource('todos', \App\Http\Controllers\Api\TodoController::class);
```

3. Use from Vue with fetch or axios:
```javascript
const response = await fetch('/api/todos');
const todos = await response.json();
```

## 📖 Learning Path Recommendation

1. Start with **Vue Basics** to understand fundamental concepts
2. Move to **Event Handling** to learn user interaction
3. Explore **Lists & Loops** for data manipulation
4. Study **Components & Props** for building modular apps
5. Build the **Todo App** to apply everything you've learned
6. Experiment in the **Code Playground** with your own ideas

## 🎓 Resources

- [Vue.js Documentation](https://vuejs.org)
- [Laravel Documentation](https://laravel.com/docs)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)

## 📝 Notes

This is a learning-focused project. The code prioritizes clarity and educational value over production optimization. Feel free to modify, extend, and experiment!

## 🤝 Contributing

To improve this learning resource:
1. Add new learning modules
2. Create additional interactive examples
3. Improve documentation
4. Fix bugs or enhance UI

## 📄 License

This project is open source and available for educational purposes.
