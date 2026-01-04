<template>
  <div class="py-8">
    <h2 class="text-4xl font-bold text-white mb-4">🧩 Components & Props</h2>
    <p class="text-purple-200 mb-8">Learn component creation and composition</p>
    
    <div class="space-y-8">
      <div class="bg-purple-600 bg-opacity-10 border border-purple-500 border-opacity-30 rounded-lg p-8">
        <h3 class="text-2xl font-bold text-white mb-6">Using Components</h3>
        <div class="space-y-4">
          <button-component 
            @click="handleButtonClick"
            label="Click me!"
            color="purple"
          />
          <button-component 
            @click="handleButtonClick"
            label="Green button"
            color="green"
          />
          <button-component 
            @click="handleButtonClick"
            label="Blue button"
            color="blue"
          />
        </div>
      </div>

      <div class="bg-blue-600 bg-opacity-10 border border-blue-500 border-opacity-30 rounded-lg p-8">
        <h3 class="text-2xl font-bold text-white mb-6">Card Component</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <card-component 
            v-for="card in cards"
            :key="card.id"
            :title="card.title"
            :description="card.description"
            :icon="card.icon"
          />
        </div>
      </div>

      <div class="bg-green-600 bg-opacity-10 border border-green-500 border-opacity-30 rounded-lg p-8">
        <h3 class="text-2xl font-bold text-white mb-6">Message Log</h3>
        <div class="space-y-2">
          <p v-for="msg in messages" :key="msg" class="bg-slate-800 p-3 rounded text-green-200">
            {{ msg }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComponent from '../components/ButtonComponent.vue';
import CardComponent from '../components/CardComponent.vue';

export default {
  name: 'ComponentsAndProps',
  components: {
    ButtonComponent,
    CardComponent
  },
  data() {
    return {
      messages: ['Component page loaded!'],
      cards: [
        {
          id: 1,
          title: 'Props',
          description: 'Pass data to child components',
          icon: '📦'
        },
        {
          id: 2,
          title: 'Events',
          description: 'Emit events from child components',
          icon: '⚡'
        },
        {
          id: 3,
          title: 'Slots',
          description: 'Flexible content distribution',
          icon: '🎯'
        },
        {
          id: 4,
          title: 'Composition',
          description: 'Combine components together',
          icon: '🧩'
        }
      ]
    }
  },
  methods: {
    handleButtonClick() {
      const time = new Date().toLocaleTimeString();
      this.messages.push(`Button clicked at ${time}`);
    }
  }
}
</script>
