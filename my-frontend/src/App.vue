<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
import "tailwindcss";
import './assets/main.css';
import './assets/tailwind.css';

</script>

<template>
  <div class="min-h-full-screen w-full-screen  flex flex-col" >
    <NavBar />
    <main class="flex-grow w-full p-4 ">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>

</style>