import {
    createRouter,
    createWebHistory,
    Router,
    RouteRecordRaw,
} from 'vue-router';
import HomeRouter from './home';

const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    HomeRouter,
] as RouteRecordRaw[];

const router: Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    history: createWebHistory(),
    routes,
});

export default router;
