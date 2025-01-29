<template>
  <header class="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 
  to-90% text-base text-white p-2 min-w-[380px] shadow-md">
    <div class="container mx-auto flex justify-between items-center">
    <div class="flex items-center space-x-1">
      <span to="/" class="text-xl font-bold pl-4 ">บ้านนายดิน : Bookstore</span>
    </div>
    <nav class="flex space-x-1 pr-6">
      <RouterLink to="/" class="hover:bg-green-200 hover:text-black hover:font-bold shadow-md mr-8 font-bold but bg-green-500 text-white py-1 px-4 rounded hover:shadow-inner">Home</RouterLink>
      <RouterLink to="/cart" class="hover:bg-green-200  hover:text-black  hover:font-bold  shadow-md font-bold bg-green-500  text-white py-1 px-4 rounded hover:shadow-inner">Cart</RouterLink>
    </nav>
    </div>
  </header>
  </template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<style scoped>
.logo {
    display: block;
}

nav a {
    font-size: 1rem;
    font-weight: 500;
    
}

nav a.router-link-exact-active {
  color: black;
  background-color: white;
box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.5);
}
</style>

<script lang="ts">
export default {
    name: 'NavBar'
}
</script>style