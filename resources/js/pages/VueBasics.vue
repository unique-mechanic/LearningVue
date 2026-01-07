<template>
  <div class="py-8">
    <h2 class="text-4xl font-bold text-white mb-4">🎯 Vue.js Basics</h2>
    <p class="text-purple-200 mb-8">Learn the fundamentals of Vue.js</p>
    
    <div class="bg-purple-600 bg-opacity-10 border border-purple-500 border-opacity-30 rounded-lg p-8">
      <h3 class="text-2xl font-bold text-white mb-6">Topics Covered:</h3>
      <ul class="text-purple-200 space-y-3 text-lg">
        <li>✓ Data binding and interpolation</li>
        <li>✓ Directives (v-if, v-show, v-for, v-bind, v-on)</li>
        <li>✓ Computed properties and methods</li>
        <li>✓ Watchers and lifecycle hooks</li>
        <li>✓ Basic component structure</li>
      </ul>
    </div>

    <div class="mt-12 bg-slate-800 bg-opacity-50 border border-slate-700 rounded-lg p-8">
      <h3 class="text-xl font-bold text-white mb-4">Interactive Example:</h3>
      <div class="bg-slate-900 rounded p-4 mb-4">
        <p class="text-white mb-4">Message: {{ message }}</p>
        <input 
          v-model="message" 
          class="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded text-white"
          placeholder="Type something..."
        />
      </div>
      <p class="text-slate-300">This input demonstrates v-model data binding - type to see the data update in real-time!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueBasics',
  data() {
    return {
      message: 'Hello from Vue!'
    }
  }
}
</script>
