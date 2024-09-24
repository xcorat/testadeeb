<!-- src/components/Footer.vue -->
<template>
  <footer class="bg-base-200 p-4 w-full text-center">
    <p class="text-sm">
      &copy; {{ currentYear }} My App. All rights reserved.
    </p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      currentYear: new Date().getFullYear(), // Get the current year
    };
  },
};
</script>

<style scoped>
/* Add any additional styles here */
/* footer {
    display: flex;
    width: 1200px;
    padding: 32px 32px 160px 32px;
    gap: 16px;
    flex-wrap: wrap;
    align-items: flex-start;
    flex-shrink: 0;

    background: #FFFFFF;
} */
</style>
