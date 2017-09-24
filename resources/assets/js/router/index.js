/**
 * Created by jijg on 2017-09-22.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

export default new VueRouter({
    saveScrollPosition: true,
    routes: [
        {
            name: 'hello',
            path: '/hello',
            component: resolve => void(require(['../components/Hello.vue'], resolve))
        },
        {
            name: 'home',
            path: '/home',
            component: resolve => void(require(['../components/Home.vue'], resolve))
        }
    ]
});
