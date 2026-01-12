<template>
  <div class="py-8">
    <h2 class="text-4xl font-bold text-white mb-4">👀 Watchers & Reactivity</h2>
    <p class="text-purple-200 mb-8">Learn how to watch data changes and react automatically</p>
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- Section 1: Basic Watcher -->
      <div class="bg-purple-600 bg-opacity-10 border border-purple-500 border-opacity-30 rounded-lg p-8">
        <h3 class="text-2xl font-bold text-white mb-6">Basic Watcher</h3>
        <p class="text-purple-200 text-sm mb-4">Watch a single value and react to changes</p>
        
        <div class="space-y-4">
          <div>
            <label class="text-slate-300 text-sm block mb-2">Username:</label>
            <input 
              v-model="username"
              class="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded text-white"
              placeholder="Type a username..."
            />
          </div>
          
          <div class="bg-slate-800 p-4 rounded">
            <p class="text-slate-400 text-sm">Input value:</p>
            <p class="text-lg text-white font-mono">{{ username }}</p>
          </div>
          
          <div class="bg-slate-800 p-4 rounded">
            <p class="text-slate-400 text-sm">Changed {{ usernameChangeCount }} times</p>
            <p class="text-lg text-green-400 font-mono">{{ usernameChangeCount }}</p>
          </div>
        </div>
      </div>

      <!-- Section 2: Computed Watcher -->
      <div class="bg-blue-600 bg-opacity-10 border border-blue-500 border-opacity-30 rounded-lg p-8">
        <h3 class="text-2xl font-bold text-white mb-6">Deep Watch (Objects)</h3>
        <p class="text-blue-200 text-sm mb-4">Watch nested object changes</p>
        
        <div class="space-y-4">
          <div class="grid grid-cols-2 gap-2">
            <div>
              <label class="text-slate-300 text-sm block mb-2">First Name:</label>
              <input 
                v-model="user.firstName"
                class="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded text-white text-sm"
              />
            </div>
            <div>
              <label class="text-slate-300 text-sm block mb-2">Last Name:</label>
              <input 
                v-model="user.lastName"
                class="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded text-white text-sm"
              />
            </div>
          </div>
          
          <div class="bg-slate-800 p-4 rounded">
            <p class="text-slate-400 text-sm">Full Name:</p>
            <p class="text-lg text-white font-mono">{{ user.firstName }} {{ user.lastName }}</p>
          </div>
          
          <div class="bg-slate-800 p-4 rounded">
            <p class="text-slate-400 text-sm">User changes:</p>
            <p class="text-lg text-blue-400 font-mono">{{ userChangeCount }}</p>
          </div>
        </div>
      </div>

      <!-- Section 3: Computed Property -->
      <div class="bg-orange-600 bg-opacity-10 border border-orange-500 border-opacity-30 rounded-lg p-8">
        <h3 class="text-2xl font-bold text-white mb-6">Search Filter</h3>
        <p class="text-orange-200 text-sm mb-4">Watch search input and filter results</p>
        
        <div class="space-y-4">
          <input 
            v-model="searchQuery"
            class="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded text-white"
            placeholder="Search fruits..."
          />
          
          <div class="bg-slate-800 p-4 rounded">
            <p class="text-slate-400 text-sm mb-2">Found {{ filteredFruits.length }} matches:</p>
            <div class="space-y-1">
              <div v-for="fruit in filteredFruits" :key="fruit" class="text-green-400">
                ✓ {{ fruit }}
              </div>
              <div v-if="filteredFruits.length === 0" class="text-slate-500">
                No matches found
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Section 4: Immediate Watcher -->
      <div class="bg-pink-600 bg-opacity-10 border border-pink-500 border-opacity-30 rounded-lg p-8">
        <h3 class="text-2xl font-bold text-white mb-6">Immediate Execution</h3>
        <p class="text-pink-200 text-sm mb-4">Run watcher immediately on mount</p>
        
        <div class="space-y-4">
          <label class="flex items-center gap-3 cursor-pointer">
            <input 
              type="checkbox" 
              v-model="autoLoad"
              class="w-5 h-5"
            />
            <span class="text-white">{{ autoLoad ? 'Auto-loading enabled' : 'Enable auto-load' }}</span>
          </label>
          
          <div class="bg-slate-800 p-4 rounded">
            <p class="text-slate-400 text-sm">Status:</p>
            <p :class="['text-lg font-mono', loadStatus === 'loading' ? 'text-yellow-400' : 'text-green-400']">
              {{ loadStatus }}
            </p>
          </div>
          
          <div v-if="loadedData" class="bg-slate-800 p-4 rounded">
            <p class="text-slate-400 text-sm">Data:</p>
            <p class="text-white font-mono text-sm">{{ loadedData }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Code Example -->
    <div class="mt-12 bg-slate-900 rounded-lg p-8 border border-slate-700">
      <h3 class="text-xl font-bold text-white mb-4">📝 How Watchers Work</h3>
      <div class="bg-slate-800 p-6 rounded overflow-x-auto">
        <pre class="text-green-400 text-sm font-mono"><code>{{ codeExample }}</code></pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WatchersLesson',
  data() {
    return {
      username: '',
      usernameChangeCount: 0,
      user: {
        firstName: 'John',
        lastName: 'Doe'
      },
      userChangeCount: 0,
      searchQuery: '',
      fruits: ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape'],
      autoLoad: false,
      loadStatus: 'idle',
      loadedData: null,
      codeExample: `// Basic Watcher Syntax
watch: {
  // Method 1: Simple watcher
  username(newValue, oldValue) {
    console.log(\`Changed from \${oldValue} to \${newValue}\`);
  },
  
  // Method 2: Deep watcher (objects)
  user: {
    handler(newValue) {
      console.log('User changed:', newValue);
    },
    deep: true
  },
  
  // Method 3: Immediate watcher
  autoLoad: {
    handler(newValue) {
      if (newValue) this.loadData();
    },
    immediate: true
  }
}

// Or use the Composition API:
import { watch } from 'vue';

watch(
  () => props.username,
  (newValue, oldValue) => {
    console.log('Username changed');
  }
);`
    }
  },
  computed: {
    filteredFruits() {
      if (!this.searchQuery) return this.fruits;
      return this.fruits.filter(fruit => 
        fruit.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  watch: {
    // Watcher 1: Count username changes
    username(newValue) {
      this.usernameChangeCount++;
    },
    
    // Watcher 2: Deep watch user object
    user: {
      handler(newValue) {
        this.userChangeCount++;
      },
      deep: true
    },
    
    // Watcher 3: Immediate execution
    autoLoad: {
      handler(newValue) {
        if (newValue) {
          this.loadStatus = 'loading';
          setTimeout(() => {
            this.loadedData = `Data loaded at ${new Date().toLocaleTimeString()}`;
            this.loadStatus = 'loaded';
          }, 1500);
        } else {
          this.loadStatus = 'idle';
          this.loadedData = null;
        }
      },
      immediate: true
    }
  },
  methods: {
    loadData() {
      this.loadStatus = 'loading';
      setTimeout(() => {
        this.loadedData = `Auto-loaded data at ${new Date().toLocaleTimeString()}`;
        this.loadStatus = 'loaded';
      }, 1500);
    }
  }
}
</script>
