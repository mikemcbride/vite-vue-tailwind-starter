<template>
    <div class="flex items-center space-x-6 text-lg">
        <button @click="decrement" aria-label="decrement">-1</button>
        <span data-testid="count-value">Count: {{ count }}</span>
        <button @click="increment" aria-label="increment">+1</button>
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
