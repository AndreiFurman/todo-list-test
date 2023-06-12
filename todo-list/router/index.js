import Vue from 'vue';
import VueRouter from  'vue-router'
import HelloWorld from '../src/components/HelloWorld';
import AddTaskPage from '../src/components/AddTaskPage';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: HelloWorld },
    { path: '/add-task', component: AddTaskPage },
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;
