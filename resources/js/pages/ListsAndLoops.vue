<template>
  <div class="py-8">
    <h2 class="text-4xl font-bold text-white mb-4">📋 Lists & Loops</h2>
    <p class="text-purple-200 mb-8">Master v-for and list rendering</p>
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div class="bg-purple-600 bg-opacity-10 border border-purple-500 border-opacity-30 rounded-lg p-8">
        <h3 class="text-2xl font-bold text-white mb-6">Basic List</h3>
        <ul class="space-y-2">
          <li v-for="item in items" :key="item.id" class="bg-slate-800 p-3 rounded text-purple-200">
            {{ item.name }}
          </li>
        </ul>
      </div>

      <div class="bg-blue-600 bg-opacity-10 border border-blue-500 border-opacity-30 rounded-lg p-8">
        <h3 class="text-2xl font-bold text-white mb-6">Sorted List</h3>
        <select 
          v-model="sortBy"
          class="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded text-white mb-4"
        >
          <option value="name">Sort by Name</option>
          <option value="priority">Sort by Priority</option>
        </select>
        <ul class="space-y-2">
          <li v-for="item in sortedItems" :key="item.id" class="bg-slate-800 p-3 rounded text-blue-200">
            {{ item.name }} - Priority: {{ item.priority }}
          </li>
        </ul>
      </div>

      <div class="bg-green-600 bg-opacity-10 border border-green-500 border-opacity-30 rounded-lg p-8 lg:col-span-2">
        <h3 class="text-2xl font-bold text-white mb-6">Search & Filter</h3>
        <input 
          v-model="searchTerm"
          class="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded text-white mb-4"
          placeholder="Search items..."
        />
        <ul class="space-y-2">
          <li v-for="item in filteredItems" :key="item.id" class="bg-slate-800 p-3 rounded text-green-200">
            {{ item.name }}
          </li>
          <li v-if="filteredItems.length === 0" class="text-slate-400 p-3">No items found</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListsAndLoops',
  data() {
    return {
      items: [
        { id: 1, name: 'Learn Vue basics', priority: 3 },
        { id: 2, name: 'Build a component', priority: 2 },
        { id: 3, name: 'Create an API', priority: 1 },
        { id: 4, name: 'Deploy to production', priority: 1 },
      ],
      sortBy: 'name',
      searchTerm: ''
    }
  },
  computed: {
    sortedItems() {
      const sorted = [...this.items];
      if (this.sortBy === 'name') {
        sorted.sort((a, b) => a.name.localeCompare(b.name));
      } else {
        sorted.sort((a, b) => a.priority - b.priority);
      }
      return sorted;
    },
    filteredItems() {
      return this.items.filter(item => 
        item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
}
</script>
