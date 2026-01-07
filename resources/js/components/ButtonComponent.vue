<template>
  <button 
    @click="$emit('click')"
    :class="[
      'font-bold py-2 px-6 rounded transition',
      colorClass
    ]"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    label: {
      type: String,
      default: 'Button'
    },
    color: {
      type: String,
      default: 'purple',
      validator: (value) => ['purple', 'green', 'blue', 'red'].includes(value)
    }
  },
  emits: ['click'],
  computed: {
    colorClass() {
      const colors = {
        purple: 'bg-purple-600 hover:bg-purple-700 text-white',
        green: 'bg-green-600 hover:bg-green-700 text-white',
        blue: 'bg-blue-600 hover:bg-blue-700 text-white',
        red: 'bg-red-600 hover:bg-red-700 text-white'
      };
      return colors[this.color];
    }
  }
}
</script>
