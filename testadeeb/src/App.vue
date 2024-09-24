<template>
  <div id="app-inner" class="flex flex-col w-full lg:w-[1200px] items-start mx-auto p-4">
    <Header />
    <router-view />
    <Footer /> 
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
/* Global styles can be added here if needed */

</style>
