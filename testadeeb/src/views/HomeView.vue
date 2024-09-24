<!-- src/views/HomeView.vue -->
<template>
  <div class="flex flex-col items-center w-full max-w-screen-lg mx-auto p-4">
    <Hero />
    <Solutions :products="products" />
    <Team :team="team" />
    <Contact />
  </div>
</template>

<script>
import Hero from '../components/Hero.vue';
import Solutions from '../components/Solutions.vue';
import Team from '../components/Team.vue';
import Contact from '../components/Contact.vue';

export default {
  components: {
    Hero,
    Solutions,
    Team,
    Contact,
  },
  data() {
    return {
      products: [
        { 
            id: 1,
            name: 'Delta Robot: ARD-15-1000-Rz',
            description: '6-axis fast robot',
            photo: 'src/assets/ard15.png'
        },
        {
            id: 2,
            name: 'Robot Controller',
            description: 'Robot controller',
            photo: 'src/assets/robo_control.png'
        },
      ],
      team: [
        {
          id: 1,
          name: 'Omar Abdul Hadi',
          experience: [
            'PhD in Robotics, UC Berkeley',
            '10+ years in software engineering',
            'Ex-Yasakawa, Ex-AMAT, Ex-Apple employee',
            'Inventor of several trade secrets and patents'
          ],
          photo: 'src/assets/image318.png',
        },
        { 
            id: 2,
            name: 'Fawaz Abdul Hadi',
            experience: [
                'Mech. Engr, Cal State Northridge',
                '40+ years in manufacturing',
                'Ex-Rockwell employee',
                'Worked on space shuttle and main engine'
            ],
            photo: 'src/assets/image518.png'
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Additional custom styles can be added here if needed */
</style>
