<template>
  <div class="py-8">
    <h2 class="text-4xl font-bold text-white mb-4">🎮 Code Playground</h2>
    <p class="text-purple-200 mb-8">Write and test Vue code in real-time</p>
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- Code Editor Section -->
      <div class="bg-purple-600 bg-opacity-10 border border-purple-500 border-opacity-30 rounded-lg p-8">
        <h3 class="text-xl font-bold text-white mb-4">Select an Example:</h3>
        <select 
          v-model="selectedExample"
          class="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded text-white mb-6"
        >
          <option value="counter">Counter App</option>
          <option value="colorChanger">Color Changer</option>
          <option value="calculator">Calculator</option>
          <option value="greeting">Dynamic Greeting</option>
          <option value="todoList">Mini Todo List</option>
          <option value="timer">Timer</option>
        </select>

        <div class="bg-slate-900 rounded p-4 mb-4 font-mono text-sm text-slate-300 overflow-x-auto max-h-96">
          <pre>{{ examples[selectedExample].code }}</pre>
        </div>
        
        <button 
          @click="runCode"
          class="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition"
        >
          Run Code
        </button>
      </div>

      <!-- Preview Section -->
      <div class="bg-blue-600 bg-opacity-10 border border-blue-500 border-opacity-30 rounded-lg p-8">
        <h3 class="text-xl font-bold text-white mb-4">Preview:</h3>
        <div class="bg-slate-900 rounded p-6 min-h-80">
          <!-- Counter Example -->
          <div v-if="selectedExample === 'counter'" class="text-white">
            <p class="text-3xl font-bold mb-4">{{ counter }}</p>
            <div class="flex gap-2">
              <button @click="counter++" class="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">+</button>
              <button @click="counter--" class="bg-red-600 px-4 py-2 rounded hover:bg-red-700">-</button>
            </div>
          </div>

          <!-- Color Changer Example -->
          <div v-if="selectedExample === 'colorChanger'" class="text-white">
            <div 
              :style="{ backgroundColor: randomColor }"
              class="w-32 h-32 rounded mb-4 transition"
            ></div>
            <button @click="changeColor" class="bg-purple-600 px-4 py-2 rounded hover:bg-purple-700">
              Change Color
            </button>
          </div>

          <!-- Calculator Example -->
          <div v-if="selectedExample === 'calculator'" class="text-white">
            <input v-model.number="num1" type="number" class="w-full px-3 py-2 bg-slate-800 rounded mb-2" />
            <input v-model.number="num2" type="number" class="w-full px-3 py-2 bg-slate-800 rounded mb-4" />
            <div class="flex gap-2 mb-4">
              <button @click="add" class="flex-1 bg-green-600 px-3 py-2 rounded">+</button>
              <button @click="subtract" class="flex-1 bg-red-600 px-3 py-2 rounded">-</button>
              <button @click="multiply" class="flex-1 bg-blue-600 px-3 py-2 rounded">×</button>
              <button @click="divide" class="flex-1 bg-yellow-600 px-3 py-2 rounded">÷</button>
            </div>
            <p class="text-2xl font-bold">Result: {{ calcResult }}</p>
          </div>

          <!-- Greeting Example -->
          <div v-if="selectedExample === 'greeting'" class="text-white">
            <input v-model="name" class="w-full px-3 py-2 bg-slate-800 rounded mb-4" placeholder="Enter your name" />
            <p class="text-2xl font-bold">{{ greetingMessage }}</p>
          </div>

          <!-- Todo List Example -->
          <div v-if="selectedExample === 'todoList'" class="text-white">
            <input v-model="todoInput" class="w-full px-3 py-2 bg-slate-800 rounded mb-2" placeholder="Add todo..." />
            <button @click="addPlaygroundTodo" class="w-full bg-blue-600 px-3 py-2 rounded mb-4">Add</button>
            <ul class="space-y-2">
              <li v-for="todo in playgroundTodos" :key="todo.id" class="bg-slate-800 p-2 rounded flex justify-between">
                <span>{{ todo.text }}</span>
                <button @click="deletePlaygroundTodo(todo.id)" class="text-red-400">×</button>
              </li>
            </ul>
          </div>

          <!-- Timer Example -->
          <div v-if="selectedExample === 'timer'" class="text-white text-center">
            <p class="text-5xl font-bold mb-4">{{ timerDisplay }}</p>
            <div class="flex gap-2 justify-center">
              <button @click="startTimer" class="bg-green-600 px-4 py-2 rounded">Start</button>
              <button @click="pauseTimer" class="bg-yellow-600 px-4 py-2 rounded">Pause</button>
              <button @click="resetTimer" class="bg-red-600 px-4 py-2 rounded">Reset</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Playground',
  data() {
    return {
      selectedExample: 'counter',
      counter: 0,
      randomColor: '#3B82F6',
      num1: 10,
      num2: 5,
      calcResult: 15,
      name: '',
      todoInput: '',
      playgroundTodos: [],
      timerSeconds: 0,
      timerRunning: false,
      timerInterval: null,
      nextTodoId: 1,
      examples: {
        counter: {
          code: `data() {
  return { count: 0 }
},
methods: {
  increment() { this.count++ }
}`
        },
        colorChanger: {
          code: `methods: {
  randomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16)
  },
  changeColor() {
    this.color = this.randomColor()
  }
}`
        },
        calculator: {
          code: `data() {
  return { num1: 0, num2: 0, result: 0 }
},
methods: {
  add() { this.result = this.num1 + this.num2 },
  subtract() { this.result = this.num1 - this.num2 }
}`
        },
        greeting: {
          code: `data() {
  return { name: '' }
},
computed: {
  greeting() {
    return this.name ? \`Hello, \${this.name}!\` : 'Enter your name'
  }
}`
        },
        todoList: {
          code: `data() {
  return { todos: [], input: '' }
},
methods: {
  addTodo() {
    this.todos.push(this.input)
    this.input = ''
  }
}`
        },
        timer: {
          code: `data() {
  return { seconds: 0, running: false }
},
methods: {
  start() { this.running = true },
  pause() { this.running = false },
  reset() { this.seconds = 0 }
}`
        }
      }
    }
  },
  computed: {
    greetingMessage() {
      return this.name ? `Hello, ${this.name}!` : 'Enter your name above';
    },
    timerDisplay() {
      const mins = Math.floor(this.timerSeconds / 60);
      const secs = this.timerSeconds % 60;
      return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }
  },
  methods: {
    runCode() {
      alert(`Example: ${this.selectedExample}\nTry interacting with the preview!`);
    },
    changeColor() {
      this.randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    },
    add() { this.calcResult = this.num1 + this.num2; },
    subtract() { this.calcResult = this.num1 - this.num2; },
    multiply() { this.calcResult = this.num1 * this.num2; },
    divide() { this.calcResult = this.num1 / this.num2; },
    addPlaygroundTodo() {
      if (this.todoInput.trim()) {
        this.playgroundTodos.push({ id: this.nextTodoId++, text: this.todoInput });
        this.todoInput = '';
      }
    },
    deletePlaygroundTodo(id) {
      this.playgroundTodos = this.playgroundTodos.filter(t => t.id !== id);
    },
    startTimer() {
      if (!this.timerRunning) {
        this.timerRunning = true;
        this.timerInterval = setInterval(() => {
          this.timerSeconds++;
        }, 1000);
      }
    },
    pauseTimer() {
      this.timerRunning = false;
      if (this.timerInterval) clearInterval(this.timerInterval);
    },
    resetTimer() {
      this.timerRunning = false;
      this.timerSeconds = 0;
      if (this.timerInterval) clearInterval(this.timerInterval);
    }
  },
  beforeUnmount() {
    if (this.timerInterval) clearInterval(this.timerInterval);
  }
}
</script>
