<!-- src/components/Header.vue -->
<template>
    <header id="header" class="bg-base-200 p-4 w-full mx-auto">
      <nav class="flex justify-between items-center">
        <div class="flex items-center">
          <img src="@/assets/logo.png" alt="Logo" class="h-12 mr-2" />
          <!-- <h1 class="text-xl font-bold">M</h1> -->
        </div>
        <ul class="flex space-x-4">
          <li>
            <router-link to="/" class="text-base">Home</router-link>
          </li>
          <li>
            <router-link to="/solutions" class="text-base">Solutions</router-link>
          </li>
          <li>
            <router-link to="/team" class="text-base">Team</router-link>
          </li>
          <li>
            <router-link to="/contact" class="text-base">Contact</router-link>
          </li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header',
  };
  </script>
  
  <style scoped>
    /* Custom styles can be added here if needed */
  </style>
