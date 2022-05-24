<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div class="max-w-4xl mx-auto mt-12">
        <header class="mb-8">
            <nav class="space-x-4">
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
            </nav>
        </header>

        <RouterView />
    </div>
</template>
