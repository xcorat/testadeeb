import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue'; // Main view that includes the landing page

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home, // Main landing page component
  },
  // {
  //   path: '/solutions',
  //   name: 'Solutions',
  //   component: () => import('../views/Solutions.vue'), // Lazy-loaded
  // },
  // {
  //   path: '/team',
  //   name: 'Team',
  //   component: () => import('../views/Team.vue'), // Lazy-loaded
  // },
  // {
  //   path: '/contact',
  //   name: 'Contact',
  //   component: () => import('../views/Contact.vue'), // Lazy-loaded
  // },
];

const router = createRouter({
  history: createWebHistory(), // process.env.BASE_URL),
  routes,
});

export default router;
