import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/app/views/Home.vue';
import authRoutes from './auth';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    components: { guest: Home },
  },
  {
    path: '/about',
    name: 'About',
    components: { guest: () => import('@/app/views/About.vue') },
  },
  ...authRoutes,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
