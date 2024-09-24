<template>
<section class="team w-full p-4">
    <h2 class="text-3xl font-semibold text-center">Meet Our Team</h2>
    <div class="grid grid-cols-2 gap-4">
        <TeamMember v-for="member in team" :key="member.id" :member="member" />
      <!-- <div class="card bg-base-100 shadow-xl" v-for="member in team" :key="member.id">
        <div class="card-body">
          <h3 class="card-title">{{ member.name }}</h3>
          <p>{{ member.role }}</p>
        </div>
      </div> -->
    </div>
  </section>
</template>

<script>
import TeamMember from './TeamMember.vue';

export default {
    components: {
        TeamMember,
  },
  props: {
      team: Array,
    },
    mounted() {
        console.log(this.team);
    },
};
</script> 

<style scoped>
/* .team {
    display: flex;
    width: 1200px;
    padding: 64px 64px;
    gap: 48px;
    flex-direction: column;
    align-items: flex-start;
    flex-shrink: 0;
} */
</style>