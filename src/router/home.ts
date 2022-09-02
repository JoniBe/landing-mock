import { RouteRecordRaw } from 'vue-router';

const HomeRouter: RouteRecordRaw = {
    name: 'Home',
    path: '/home',
    component: () =>
        import(/*webpackChunkName "home-view"*/ '../views/home/Main.vue'),
    // import(
    //     /*webpackChunkName "under-construction-view"*/ '../views/under-construction/Main.vue'
    // ),
};

export default HomeRouter;
