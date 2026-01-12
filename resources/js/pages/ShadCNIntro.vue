<template>
  <div class="py-8">
    <h2 class="text-4xl font-bold text-white mb-4">🎨 ShadCN/ui - Component Library</h2>
    <p class="text-purple-200 mb-8">Beautiful, accessible components built with Radix UI and Tailwind CSS</p>
    
    <!-- What is ShadCN Section -->
    <div class="mb-12 bg-gradient-to-r from-slate-800 to-slate-900 rounded-lg p-8 border border-slate-700">
      <h3 class="text-2xl font-bold text-white mb-4">❓ What is ShadCN/ui?</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 class="text-lg font-semibold text-purple-300 mb-3">🚀 Key Points:</h4>
          <ul class="space-y-2 text-slate-300">
            <li class="flex gap-2"><span class="text-green-400">✓</span> <span>Not a traditional component library (no npm install)</span></li>
            <li class="flex gap-2"><span class="text-green-400">✓</span> <span>Copy-paste component collection</span></li>
            <li class="flex gap-2"><span class="text-green-400">✓</span> <span>Built on Radix UI (headless) + Tailwind CSS</span></li>
            <li class="flex gap-2"><span class="text-green-400">✓</span> <span>100% customizable - you own the code</span></li>
            <li class="flex gap-2"><span class="text-green-400">✓</span> <span>Production-ready components</span></li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-semibold text-blue-300 mb-3">💡 Why Use It?</h4>
          <ul class="space-y-2 text-slate-300">
            <li class="flex gap-2"><span class="text-blue-400">→</span> <span>Consistent, professional UI out of box</span></li>
            <li class="flex gap-2"><span class="text-blue-400">→</span> <span>Accessible components (WCAG compliant)</span></li>
            <li class="flex gap-2"><span class="text-blue-400">→</span> <span>Zero vendor lock-in</span></li>
            <li class="flex gap-2"><span class="text-blue-400">→</span> <span>Highly customizable with Tailwind</span></li>
            <li class="flex gap-2"><span class="text-blue-400">→</span> <span>Great for rapid development</span></li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Common Components Grid -->
    <div class="mb-12">
      <h3 class="text-2xl font-bold text-white mb-6">📦 Common ShadCN Components</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Button Component -->
        <div class="bg-slate-800 rounded-lg p-6 border border-slate-700">
          <h4 class="text-lg font-semibold text-white mb-4">Button</h4>
          <div class="space-y-2 mb-4">
            <button class="w-full px-4 py-2 bg-white text-black rounded hover:bg-slate-100 transition font-medium">
              Primary
            </button>
            <button class="w-full px-4 py-2 bg-slate-700 text-white rounded hover:bg-slate-600 transition font-medium">
              Secondary
            </button>
            <button class="w-full px-4 py-2 border border-slate-600 text-white rounded hover:bg-slate-700 transition font-medium">
              Outline
            </button>
            <button disabled class="w-full px-4 py-2 bg-slate-600 text-slate-400 rounded font-medium opacity-50 cursor-not-allowed">
              Disabled
            </button>
          </div>
          <pre class="text-xs bg-black p-2 rounded text-green-400 overflow-x-auto"><code>&lt;Button variant="primary"&gt;
  Click me
&lt;/Button&gt;</code></pre>
        </div>

        <!-- Input Component -->
        <div class="bg-slate-800 rounded-lg p-6 border border-slate-700">
          <h4 class="text-lg font-semibold text-white mb-4">Input</h4>
          <div class="space-y-3 mb-4">
            <input type="text" placeholder="Default input" class="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white transition" />
            <input type="email" placeholder="Email input" class="w-full px-3 py-2 bg-slate-700 border border-red-600 rounded text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition" />
            <input type="text" placeholder="Disabled" disabled class="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded text-slate-400 opacity-50 cursor-not-allowed" />
          </div>
          <pre class="text-xs bg-black p-2 rounded text-green-400 overflow-x-auto"><code>&lt;Input 
  type="email" 
  placeholder="Email"
/&gt;</code></pre>
        </div>

        <!-- Card Component -->
        <div class="bg-slate-800 rounded-lg p-6 border border-slate-700">
          <h4 class="text-lg font-semibold text-white mb-4">Card</h4>
          <div class="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-4">
            <div class="font-semibold text-white mb-1">Card Title</div>
            <p class="text-sm text-slate-400">This is a card component with header and content area.</p>
          </div>
          <pre class="text-xs bg-black p-2 rounded text-green-400 overflow-x-auto"><code>&lt;Card&gt;
  &lt;CardHeader&gt;Title&lt;/CardHeader&gt;
  &lt;CardContent&gt;...&lt;/CardContent&gt;
&lt;/Card&gt;</code></pre>
        </div>

        <!-- Badge Component -->
        <div class="bg-slate-800 rounded-lg p-6 border border-slate-700">
          <h4 class="text-lg font-semibold text-white mb-4">Badge</h4>
          <div class="space-y-2 mb-4">
            <div class="flex gap-2 flex-wrap">
              <span class="px-3 py-1 bg-white text-black rounded-full text-sm font-medium">Default</span>
              <span class="px-3 py-1 bg-green-600 text-white rounded-full text-sm font-medium">Success</span>
              <span class="px-3 py-1 bg-red-600 text-white rounded-full text-sm font-medium">Destructive</span>
              <span class="px-3 py-1 bg-slate-700 text-white rounded-full text-sm font-medium">Secondary</span>
            </div>
          </div>
          <pre class="text-xs bg-black p-2 rounded text-green-400 overflow-x-auto"><code>&lt;Badge variant="success"&gt;
  Active
&lt;/Badge&gt;</code></pre>
        </div>

        <!-- Alert Component -->
        <div class="bg-slate-800 rounded-lg p-6 border border-slate-700">
          <h4 class="text-lg font-semibold text-white mb-4">Alert</h4>
          <div class="space-y-2 mb-4">
            <div class="p-3 bg-blue-900 border border-blue-700 rounded text-blue-100 text-sm">
              ℹ️ Informational message
            </div>
            <div class="p-3 bg-red-900 border border-red-700 rounded text-red-100 text-sm">
              ⚠️ Error message
            </div>
          </div>
          <pre class="text-xs bg-black p-2 rounded text-green-400 overflow-x-auto"><code>&lt;Alert variant="error"&gt;
  Error occurred
&lt;/Alert&gt;</code></pre>
        </div>

        <!-- Dialog/Modal Component -->
        <div class="bg-slate-800 rounded-lg p-6 border border-slate-700">
          <h4 class="text-lg font-semibold text-white mb-4">Dialog/Modal</h4>
          <div class="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-4">
            <div class="font-semibold text-white mb-2">Modal Title</div>
            <p class="text-sm text-slate-400 mb-4">Modal content goes here...</p>
            <div class="flex gap-2">
              <button class="flex-1 px-3 py-1 bg-slate-700 text-white rounded text-sm hover:bg-slate-600">Cancel</button>
              <button class="flex-1 px-3 py-1 bg-white text-black rounded text-sm hover:bg-slate-100">OK</button>
            </div>
          </div>
          <pre class="text-xs bg-black p-2 rounded text-green-400 overflow-x-auto"><code>&lt;Dialog&gt;
  &lt;DialogContent&gt;...&lt;/DialogContent&gt;
&lt;/Dialog&gt;</code></pre>
        </div>
      </div>
    </div>

    <!-- Interactive Demo -->
    <div class="mb-12 bg-slate-800 rounded-lg p-8 border border-slate-700">
      <h3 class="text-2xl font-bold text-white mb-6">🎯 Interactive Demo</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label class="text-white font-semibold mb-3 block">Try Different Button Variants:</label>
          <div class="space-y-2">
            <button v-for="variant in buttonVariants" :key="variant" @click="selectedVariant = variant" :class="['w-full px-4 py-2 rounded font-medium transition', selectedVariant === variant ? 'ring-2 ring-offset-2 ring-offset-slate-800 ring-white' : '', getButtonClass(variant)]">
              {{ variant }}
            </button>
          </div>
        </div>
        <div>
          <label class="text-white font-semibold mb-3 block">Preview:</label>
          <div class="bg-slate-900 p-6 rounded border border-slate-700 flex items-center justify-center min-h-32">
            <button :class="getButtonClass(selectedVariant)" class="px-6 py-3 rounded font-semibold">
              Sample Button
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Getting Started -->
    <div class="bg-gradient-to-r from-purple-900 to-slate-900 rounded-lg p-8 border border-purple-700">
      <h3 class="text-2xl font-bold text-white mb-4">🚀 Getting Started with ShadCN</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <div class="text-xl font-bold text-purple-300 mb-2">1. Visit Website</div>
          <p class="text-slate-300">Go to <a href="https://ui.shadcn.com" target="_blank" class="text-purple-400 hover:underline">ui.shadcn.com</a> for React or <a href="https://www.shadcn-vue.com/" target="_blank" class="text-purple-400 hover:underline">shadcn-vue.com</a> for Vue</p>
        </div>
        <div>
          <div class="text-xl font-bold text-purple-300 mb-2">2. Copy Component</div>
          <p class="text-slate-300">Browse the component library and copy the code you need</p>
        </div>
        <div>
          <div class="text-xl font-bold text-purple-300 mb-2">3. Paste & Use</div>
          <p class="text-slate-300">Paste into your project and customize with Tailwind CSS</p>
        </div>
      </div>
      
      <div class="mt-6 pt-6 border-t border-purple-700">
        <h4 class="text-lg font-semibold text-white mb-3">Key Differences vs Other Libraries:</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-300">
          <div>
            <span class="font-semibold text-purple-300">ShadCN:</span> Copy-paste, you own code, highly customizable
          </div>
          <div>
            <span class="font-semibold text-purple-300">Material UI:</span> npm install, third-party dependency, less control
          </div>
          <div>
            <span class="font-semibold text-purple-300">Bootstrap:</span> Full framework, heavier, older approach
          </div>
          <div>
            <span class="font-semibold text-purple-300">Headless UI:</span> Unstyled primitives, you style everything
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShadCNIntro',
  data() {
    return {
      buttonVariants: ['primary', 'secondary', 'outline', 'destructive', 'ghost'],
      selectedVariant: 'primary'
    }
  },
  methods: {
    getButtonClass(variant) {
      const classes = {
        primary: 'bg-white text-black hover:bg-slate-100',
        secondary: 'bg-slate-700 text-white hover:bg-slate-600',
        outline: 'border border-slate-600 text-white hover:bg-slate-700',
        destructive: 'bg-red-600 text-white hover:bg-red-700',
        ghost: 'text-white hover:bg-slate-800'
      };
      return classes[variant] || classes.primary;
    }
  }
}
</script>
