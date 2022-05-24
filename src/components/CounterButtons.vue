<template>
    <div class="flex items-center space-x-2 text-lg">
        <button
            class="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-base font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            @click="decrement"
            aria-label="decrement"
        >
            -
        </button>
        <span
            class="w-40 text-center py-1 border border-gray-300 rounded"
            data-testid="count-value"
            >Count: {{ count }}</span
        >
        <button
            class="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-base font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            @click="increment"
            aria-label="increment"
        >
            +
        </button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(0)
function decrement() {
    count.value -= 1
}
function increment() {
    count.value += 1
}
</script>
