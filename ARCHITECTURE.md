# Architecture Overview - Laravel + Vue 3 SPA

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     USER'S BROWSER                           │
│  ┌───────────────────────────────────────────────────────┐  │
│  │  Vue.js SPA (Single Page Application)                 │  │
│  │  ┌─────────────────────────────────────────────────┐  │  │
│  │  │ Router (Vue Router)                             │  │  │
│  │  │  - Home.vue                                     │  │  │
│  │  │  - VueBasics.vue                                │  │  │
│  │  │  - EventHandling.vue                            │  │  │
│  │  │  - ListsAndLoops.vue                            │  │  │
│  │  │  - ComponentsAndProps.vue                       │  │  │
│  │  │  - TodoApp.vue                                  │  │  │
│  │  │  - Playground.vue                               │  │  │
│  │  └─────────────────────────────────────────────────┘  │  │
│  │  ┌─────────────────────────────────────────────────┐  │  │
│  │  │ Shared Components                               │  │  │
│  │  │  - ButtonComponent.vue                          │  │  │
│  │  │  - CardComponent.vue                            │  │  │
│  │  └─────────────────────────────────────────────────┘  │  │
│  │  ┌─────────────────────────────────────────────────┐  │  │
│  │  │ Styling: Tailwind CSS v4 (responsive, dark)     │  │  │
│  │  └─────────────────────────────────────────────────┘  │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                              ↓ HTTP
┌─────────────────────────────────────────────────────────────┐
│                 DEVELOPMENT SERVER                           │
│  ┌──────────────────────┐      ┌──────────────────────────┐ │
│  │  Vite Dev Server     │      │  Laravel Dev Server      │ │
│  │  (Hot Module Reload) │      │  (php artisan serve)     │ │
│  │  - Port: 5173        │      │  - Port: 8000            │ │
│  │  - Instant updates   │      │  - Routes & Middleware   │ │
│  └──────────────────────┘      └──────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                PRODUCTION BUILD PIPELINE                     │
│  ┌───────────────────────────────────────────────────────┐  │
│  │  Command: npm run build                               │  │
│  │  ↓                                                     │  │
│  │  Vite Bundle & Minify                                 │  │
│  │  ↓                                                     │  │
│  │  Output: public/build/ (optimized assets)            │  │
│  │  - app-HASH.js (minified)                             │  │
│  │  - app-HASH.css (minified)                            │  │
│  │  - manifest.json (asset mapping)                      │  │
│  └───────────────────────────────────────────────────────┘  │
│  ↓                                                            │
│  Deploy to Web Server (Apache, Nginx)                        │
└─────────────────────────────────────────────────────────────┘
```

## 📊 Request Flow

### Development Flow
```
User Action
    ↓
Vue Component (pages/*.vue)
    ↓
Vue Router
    ↓
Component State Update
    ↓
Re-render (Vite HMR)
    ↓
Browser Instant Update
```

### Production Flow
```
User Visits Site
    ↓
Laravel Serves welcome.blade.php
    ↓
Loads optimized app-HASH.js from public/build/
    ↓
Vue.js App Initializes
    ↓
Vue Router Handles Navigation
    ↓
Components Render (No Page Refresh)
    ↓
Ready for API Calls
```

## 🔗 File Dependencies

```
app.js (Entry Point)
├── App.vue (Root Component)
│   ├── Navigation Bar (integrated)
│   └── <router-view /> (page content)
│
├── vue-router (routing)
│   ├── Home.vue
│   ├── VueBasics.vue
│   ├── EventHandling.vue
│   ├── ListsAndLoops.vue
│   ├── ComponentsAndProps.vue
│   │   ├── ButtonComponent.vue
│   │   └── CardComponent.vue
│   ├── TodoApp.vue
│   └── Playground.vue
│
└── bootstrap.js (Laravel config)
    ├── axios (ready for API calls)
    └── CSRF token setup
```

## 🔄 Data Flow in TodoApp Example

```
User Input (Add Todo)
    ↓
TodoApp.vue (page)
    ↓
addTodo() method
    ↓
this.todos.push()
    ↓
State Update (data)
    ↓
Vue Reactivity
    ↓
Template Re-renders
    ↓
User Sees New Todo
```

## 🌐 Routing Map

```
http://localhost:8000
│
├── / (Home)
│   └── Home.vue
│
├── /vue-basics
│   └── VueBasics.vue
│
├── /event-handling
│   └── EventHandling.vue
│
├── /lists-and-loops
│   └── ListsAndLoops.vue
│
├── /components-and-props
│   └── ComponentsAndProps.vue
│
├── /todo-app
│   └── TodoApp.vue
│
└── /playground
    └── Playground.vue
```

## 📦 Component Tree

```
App (Root)
│
├── Navigation Bar
│   ├── Logo & Title
│   └── Navigation Links (router-link)
│
└── <router-view> (Dynamic Content)
    ├── Home
    │   └── Learning Module Cards
    │
    ├── VueBasics
    │   └── Interactive Demo
    │
    ├── EventHandling
    │   ├── ButtonComponent (multiple instances)
    │   └── Event Demo Examples
    │
    ├── ListsAndLoops
    │   ├── Basic List
    │   ├── Sorted List
    │   └── Filtered List
    │
    ├── ComponentsAndProps
    │   ├── ButtonComponent (with props)
    │   └── CardComponent (with props)
    │
    ├── TodoApp
    │   ├── Input Section
    │   ├── Filter Buttons
    │   ├── Todo List
    │   └── Stats Panel
    │
    └── Playground
        ├── Example Selector
        ├── Code Editor (display)
        └── Preview Section
```

## 🔐 Security Flow

```
Browser Request
    ↓
Laravel Middleware
├── CSRF Protection (web routes)
├── CORS Handling (api routes)
└── Rate Limiting (ready)
    ↓
Route Handler
├── Web Route → welcome blade
└── API Route → JSON Response
    ↓
Vue Client
├── CSRF Token (in meta tag)
├── Secure API Calls
└── XSS Protected (Vue escaping)
```

## 🚀 Deployment Architecture

```
Development:
├── Vite Dev Server (port 5173)
├── Laravel Server (port 8000)
└── Database (SQLite)

Production:
├── Web Server (Apache/Nginx)
│   ├── public/index.php (Laravel entry)
│   ├── public/build/ (Vue assets - cached)
│   └── public/storage (user uploads)
├── App Server (PHP-FPM or similar)
├── Database (MySQL/PostgreSQL)
└── Optional: Cache (Redis), Queue (RabbitMQ)
```

## 🔌 API Integration Ready

```
Current: Local Component State
├── TodoApp uses data()
└── Playground uses data()

Future: Backend Integration
├── API Endpoints (routes/api.php)
│   ├── GET /api/todos
│   ├── POST /api/todos
│   ├── PUT /api/todos/{id}
│   └── DELETE /api/todos/{id}
└── Vue Components
    ├── Fetch data from API
    ├── Send updates to API
    └── Sync with database
```

## 📈 Performance Optimizations

### Development
- Hot Module Reload (instant updates)
- Source maps for debugging
- Vite's native ES module support

### Production
- Code splitting by route
- Minified JavaScript/CSS
- Tree shaking (unused code removed)
- Lazy loading (async components)
- Caching headers on static assets

## 🔄 Typical Development Workflow

```
1. Modify .vue file
    ↓
2. Vite detects change
    ↓
3. Rebuilds module
    ↓
4. Sends update to browser
    ↓
5. Vue HMR updates component
    ↓
6. No page refresh (state preserved)
    ↓
7. See changes instantly
```

---

This architecture provides:
- ✅ Fast development with instant feedback
- ✅ Production-ready optimization
- ✅ Scalable to add backend features
- ✅ Modern JavaScript practices
- ✅ Clear separation of concerns
