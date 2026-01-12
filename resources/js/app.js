import './bootstrap';import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';

// Import pages
import Home from './pages/Home.vue';
import VueBasics from './pages/VueBasics.vue';
import EventHandling from './pages/EventHandling.vue';
import ListsAndLoops from './pages/ListsAndLoops.vue';
import ComponentsAndProps from './pages/ComponentsAndProps.vue';
import Watchers from './pages/Watchers.vue';
import ShadCNIntro from './pages/ShadCNIntro.vue';
import TodoApp from './pages/TodoApp.vue';
import Playground from './pages/Playground.vue';

// Define routes
const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/vue-basics', component: VueBasics, name: 'vue-basics' },
  { path: '/event-handling', component: EventHandling, name: 'event-handling' },
  { path: '/lists-and-loops', component: ListsAndLoops, name: 'lists-and-loops' },
  { path: '/components-and-props', component: ComponentsAndProps, name: 'components-and-props' },
  { path: '/watchers', component: Watchers, name: 'watchers' },
  { path: '/shadcn', component: ShadCNIntro, name: 'shadcn' },
  { path: '/todo-app', component: TodoApp, name: 'todo-app' },
  { path: '/playground', component: Playground, name: 'playground' },
];

// Create router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Create app
const app = createApp(App);
app.use(router);
app.mount('#app');