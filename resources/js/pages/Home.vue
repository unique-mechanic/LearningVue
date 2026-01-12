<template>
  <div>
    <!-- Hero Section -->
    <div class="py-16">
      <h2 class="text-5xl font-bold text-white mb-6">Welcome to Vue.js Learning Hub</h2>
      <p class="text-xl text-purple-200 mb-12 max-w-2xl">
        A comprehensive, interactive learning platform for mastering Vue.js from fundamentals to real-world applications.
      </p>
      
      <!-- Learning Modules Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        <router-link to="/vue-basics" class="learning-card">
          <div class="bg-purple-600 bg-opacity-20 border border-purple-500 border-opacity-30 rounded-lg p-6 hover:bg-opacity-30 transition">
            <h3 class="text-2xl font-bold text-white mb-2">🎯 Vue Basics</h3>
            <p class="text-purple-200">Data binding, directives, computed properties, and basic components</p>
          </div>
        </router-link>

        <router-link to="/event-handling" class="learning-card">
          <div class="bg-purple-600 bg-opacity-20 border border-purple-500 border-opacity-30 rounded-lg p-6 hover:bg-opacity-30 transition">
            <h3 class="text-2xl font-bold text-white mb-2">⚡ Event Handling</h3>
            <p class="text-purple-200">Click events, form handling, mouse events, and event bubbling</p>
          </div>
        </router-link>

        <router-link to="/lists-and-loops" class="learning-card">
          <div class="bg-purple-600 bg-opacity-20 border border-purple-500 border-opacity-30 rounded-lg p-6 hover:bg-opacity-30 transition">
            <h3 class="text-2xl font-bold text-white mb-2">📋 Lists & Loops</h3>
            <p class="text-purple-200">v-for loops, list rendering, sorting, filtering, and optimization</p>
          </div>
        </router-link>

        <router-link to="/components-and-props" class="learning-card">
          <div class="bg-purple-600 bg-opacity-20 border border-purple-500 border-opacity-30 rounded-lg p-6 hover:bg-opacity-30 transition">
            <h3 class="text-2xl font-bold text-white mb-2">🧩 Components & Props</h3>
            <p class="text-purple-200">Component creation, props, events, slots, and composition</p>
          </div>
        </router-link>

        <router-link to="/watchers" class="learning-card">
          <div class="bg-blue-600 bg-opacity-20 border border-blue-500 border-opacity-30 rounded-lg p-6 hover:bg-opacity-30 transition">
            <h3 class="text-2xl font-bold text-white mb-2">👀 Watchers & Reactivity</h3>
            <p class="text-blue-200">Watch data changes, deep watching, computed properties, and reactive updates</p>
          </div>
        </router-link>

        <router-link to="/todo-app" class="learning-card">
          <div class="bg-green-600 bg-opacity-20 border border-green-500 border-opacity-30 rounded-lg p-6 hover:bg-opacity-30 transition">
            <h3 class="text-2xl font-bold text-white mb-2">✅ Todo App</h3>
            <p class="text-green-200">Complete application with CRUD operations and local storage</p>
          </div>
        </router-link>

        <router-link to="/playground" class="learning-card">
          <div class="bg-blue-600 bg-opacity-20 border border-blue-500 border-opacity-30 rounded-lg p-6 hover:bg-opacity-30 transition">
            <h3 class="text-2xl font-bold text-white mb-2">🎮 Code Playground</h3>
            <p class="text-blue-200">Write and test Vue code in real-time with live preview</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style scoped>
.learning-card {
  text-decoration: none;
  cursor: pointer;
}
</style>
