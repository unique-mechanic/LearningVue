<template>
  <div class="py-8">
    <h2 class="text-4xl font-bold text-white mb-4">✅ Todo App</h2>
    <p class="text-purple-200 mb-8">A complete Vue application with CRUD operations</p>
    
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div class="lg:col-span-2">
        <div class="bg-purple-600 bg-opacity-10 border border-purple-500 border-opacity-30 rounded-lg p-8">
          <h3 class="text-2xl font-bold text-white mb-6">Manage Your Todos</h3>
          
          <!-- Input Section -->
          <div class="mb-6 flex gap-2">
            <input 
              v-model="newTodo"
              @keyup.enter="addTodo"
              class="flex-1 px-4 py-3 bg-slate-800 border border-slate-600 rounded text-white"
              placeholder="Add a new todo..."
            />
            <button 
              @click="addTodo"
              class="bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-3 rounded transition"
            >
              Add
            </button>
          </div>

          <!-- Filter Tabs -->
          <div class="flex gap-2 mb-6">
            <button 
              v-for="tab in filterTabs"
              :key="tab"
              @click="activeFilter = tab"
              :class="[
                'px-4 py-2 rounded transition',
                activeFilter === tab 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              ]"
            >
              {{ tab }}
            </button>
          </div>

          <!-- Todo List -->
          <div class="space-y-2">
            <div 
              v-for="todo in filteredTodos"
              :key="todo.id"
              class="flex items-center gap-3 bg-slate-800 p-4 rounded"
            >
              <input 
                type="checkbox"
                :checked="todo.completed"
                @change="toggleTodo(todo.id)"
                class="w-5 h-5"
              />
              <span 
                :class="[
                  'flex-1',
                  todo.completed ? 'line-through text-slate-500' : 'text-white'
                ]"
              >
                {{ todo.text }}
              </span>
              <button 
                @click="deleteTodo(todo.id)"
                class="text-red-400 hover:text-red-300 transition"
              >
                ✕
              </button>
            </div>
            <p v-if="filteredTodos.length === 0" class="text-slate-400 p-4 text-center">
              No todos found
            </p>
          </div>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="bg-blue-600 bg-opacity-10 border border-blue-500 border-opacity-30 rounded-lg p-8 h-fit">
        <h3 class="text-2xl font-bold text-white mb-6">Statistics</h3>
        <div class="space-y-4">
          <div>
            <p class="text-slate-400 text-sm">Total Todos</p>
            <p class="text-3xl font-bold text-blue-400">{{ todos.length }}</p>
          </div>
          <div>
            <p class="text-slate-400 text-sm">Completed</p>
            <p class="text-3xl font-bold text-green-400">{{ completedCount }}</p>
          </div>
          <div>
            <p class="text-slate-400 text-sm">Remaining</p>
            <p class="text-3xl font-bold text-orange-400">{{ remainingCount }}</p>
          </div>
          <div class="pt-4">
            <p class="text-slate-400 text-sm">Progress</p>
            <div class="w-full bg-slate-700 rounded h-2 mt-2">
              <div 
                :style="{ width: progressPercent + '%' }"
                class="bg-green-500 h-2 rounded transition-all"
              ></div>
            </div>
            <p class="text-green-400 text-sm mt-2">{{ progressPercent }}%</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoApp',
  data() {
    return {
      todos: [
        { id: 1, text: 'Learn Vue.js', completed: true },
        { id: 2, text: 'Build a todo app', completed: true },
        { id: 3, text: 'Deploy to production', completed: false },
        { id: 4, text: 'Learn backend development', completed: false },
      ],
      newTodo: '',
      activeFilter: 'All',
      filterTabs: ['All', 'Active', 'Completed'],
      nextId: 5
    }
  },
  computed: {
    filteredTodos() {
      if (this.activeFilter === 'Active') {
        return this.todos.filter(t => !t.completed);
      }
      if (this.activeFilter === 'Completed') {
        return this.todos.filter(t => t.completed);
      }
      return this.todos;
    },
    completedCount() {
      return this.todos.filter(t => t.completed).length;
    },
    remainingCount() {
      return this.todos.filter(t => !t.completed).length;
    },
    progressPercent() {
      if (this.todos.length === 0) return 0;
      return Math.round((this.completedCount / this.todos.length) * 100);
    }
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim()) {
        this.todos.push({
          id: this.nextId++,
          text: this.newTodo,
          completed: false
        });
        this.newTodo = '';
      }
    },
    toggleTodo(id) {
      const todo = this.todos.find(t => t.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo(id) {
      this.todos = this.todos.filter(t => t.id !== id);
    }
  }
}
</script>
