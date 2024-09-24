<template>
  <div class="hero relative h-96 flex items-center justify-center overflow-hidden">
    <video autoplay muted loop class="absolute inset-0 w-full h-full object-cover">
      <source src="@/assets/robo1.mp4" type="video/mp4" /> <!-- Update with your video path -->
      Your browser does not support the video tag.
    </video>
    <div class="relative z-10 text-center">
      <h1 class="text-5xl font-bold text-white">Adeeb Robotics</h1>
      <p class="mt-2 text-lg text-white">Innovating the future of robotics.</p>
      <button class="btn btn-primary mt-4">Try Now!</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
};
</script>

<style scoped>
/* Additional custom styles can be added here if needed */
</style>
