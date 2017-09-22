
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
//app.js 是构建 Vue 项目的主文件，最后所有的组件都会被引入到这个文件，在引入所有组件之前，bootstrap.js 文件做了一些初始化的操作。
// 同时，因为有了 window.Vue = require(‘vue’) 这句话，就不再需要使用 import Vue from ‘vue’ 重复导入 Vue 了。

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Vue.component('example', require('./components/Example.vue'));
// import Hello from './components/Hello.vue'; // 引入Hello 组件
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
Vue.use(ElementUI);

import router from './router/index.js';

const app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
});

//以后如果要添加组件，只需在 resources/assets/js/components 目录下新建 vue 文件，
//在 resources/assets/js/router/index.js 文件里引入，然后就可以通过路由访问了