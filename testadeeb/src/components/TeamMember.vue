<template>
<div class="card bg-base-100 shadow-xl min-w-lg">
    <h3 class="card-title text-xl font-bold">{{ member.name }}</h3>
    <figure>
      <img :src="member.photo" alt="Photo of {{ member.name }}" class="w-full h-48 object-cover" />
      <figcaption class="p-4">
        <!-- <h3 class="text-xl font-bold">{{ member.name }}</h3> -->
      </figcaption>
    </figure>
    <ul class="text-lg text-gray-600 list-disc list-inside">
        <li v-for="(exp, index) in member.experience" :key="index">{{ exp }}</li>
    </ul>

</div>
</template>

<script>

// console.log(member);
export default {
    props: {
        member: Object,
    },
};
</script>

<style scoped>

</style>