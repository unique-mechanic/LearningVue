<template>
  <div class="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen">
    <!-- Navigation Bar -->
    <nav class="bg-black bg-opacity-40 backdrop-blur-md border-b border-purple-500 border-opacity-30 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center gap-2">
            <span class="text-3xl">🚀</span>
            <h1 class="text-white text-2xl font-bold">Vue.js Learning Hub</h1>
          </div>
          <div class="flex gap-4">
            <router-link to="/" class="text-purple-300 hover:text-purple-100 transition">Home</router-link>
            <a href="https://vuejs.org" target="_blank" class="text-purple-300 hover:text-purple-100 transition">Vue Docs</a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scoped>
</style>
