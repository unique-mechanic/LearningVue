<template>
  <div class="py-8">
    <h2 class="text-4xl font-bold text-white mb-4">⚡ Event Handling</h2>
    <p class="text-purple-200 mb-8">Learn how to handle user interactions</p>
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div class="bg-purple-600 bg-opacity-10 border border-purple-500 border-opacity-30 rounded-lg p-8">
        <h3 class="text-2xl font-bold text-white mb-6">Click Events</h3>
        <button 
          @click="incrementCounter"
          class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded mb-4 transition"
        >
          Click me! ({{ counter }})
        </button>
        <p class="text-purple-200">Current count: {{ counter }}</p>
      </div>

      <div class="bg-purple-600 bg-opacity-10 border border-purple-500 border-opacity-30 rounded-lg p-8">
        <h3 class="text-2xl font-bold text-white mb-6">Form Events</h3>
        <input 
          v-model="inputValue"
          @input="handleInput"
          class="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded text-white mb-4"
          placeholder="Type something..."
        />
        <p class="text-purple-200">Input value: {{ inputValue }}</p>
      </div>

      <div class="bg-blue-600 bg-opacity-10 border border-blue-500 border-opacity-30 rounded-lg p-8">
        <h3 class="text-2xl font-bold text-white mb-6">Mouse Events</h3>
        <div 
          @mouseenter="isHovering = true"
          @mouseleave="isHovering = false"
          class="bg-slate-800 p-6 rounded border border-slate-600 text-center"
        >
          <p class="text-white text-lg">
            {{ isHovering ? 'You are hovering!' : 'Hover over me' }}
          </p>
        </div>
      </div>

      <div class="bg-green-600 bg-opacity-10 border border-green-500 border-opacity-30 rounded-lg p-8">
        <h3 class="text-2xl font-bold text-white mb-6">Modifier Keys</h3>
        <input 
          v-model="modifierValue"
          @keyup.enter="submitForm"
          class="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded text-white mb-4"
          placeholder="Press Enter to submit..."
        />
        <p class="text-green-200">Press Enter in the input above!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventHandling',
  data() {
    return {
      counter: 0,
      inputValue: '',
      isHovering: false,
      modifierValue: ''
    }
  },
  methods: {
    incrementCounter() {
      this.counter++;
    },
    handleInput() {
      // This is triggered whenever the input changes
    },
    submitForm() {
      alert('Form submitted with: ' + this.modifierValue);
      this.modifierValue = '';
    }
  }
}
</script>
