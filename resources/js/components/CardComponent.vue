<template>
  <div class="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-slate-600 transition">
    <div class="text-4xl mb-3">{{ icon }}</div>
    <h4 class="text-xl font-bold text-white mb-2">{{ title }}</h4>
    <p class="text-slate-300">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'CardComponent',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: '📦'
    }
  }
}
</script>
