<template>
  <section class="solutions w-full p-4">
    <h2 class="text-3xl font-semibold text-center">Our Solutions</h2>
    <div class="grid grid-cols-1 gap-4">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
      <!-- <div class="card bg-base-100 shadow-xl" v-for="product in products" :key="product.id">
        <div class="card-body">
          <h3 class="card-title">{{ product.name }}</h3>
          <p>{{ product.description }}</p>
        </div>
      </div> -->
    </div>
  </section>
</template>

<script>
import ProductCard from './ProductCard.vue';

export default {
  components: {
    ProductCard,
  },
  props: {
    products: Array,
  },

};
</script>

<style scoped>
/* .solutions { */
    /* display: flex; */
    /* width: 1200px; */
    /* padding: 0px 0px; */
    /* gap: 10px; */
    /* flex-direction: row; */
    /* align-items: flex-start; */
    /* flex-shrink: 0; */
/* } */
</style>
