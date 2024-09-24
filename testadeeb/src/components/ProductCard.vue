<template>
<div class="card bg-base-100 shadow-xl">
    <h3 class="card-title text-xl font-bold">{{ product.name }}</h3>
    <figure>
      <img :src="product.photo" alt="Photo of {{ product.name }}" class="w-full h-48 object-cover" />
      <figcaption class="p-4">
        <!-- <h3 class="text-xl font-bold">{{ member.name }}</h3> -->
      </figcaption>
    </figure>
    <p class="text-lg text-gray-600">{{ product.description }}</p>
    <!-- <ul class="text-lg text-gray-600 list-disc list-inside">
        <li v-for="(exp, index) in product.desc" :key="index">{{ exp }}</li>
    </ul> -->

</div>
</template>

<script>

// console.log(member);
export default {
    props: {
        product: Object,
    },
};
</script>