import { RouteRecordRaw } from 'vue-router';

const authRoutes: Array<RouteRecordRaw> = [
  {
    name: 'Login',
    path: '/login',
    components: {
      guest: () => import('@/app/features/auth/login/views/Login.vue'),
    },
  },
];

export default authRoutes;
