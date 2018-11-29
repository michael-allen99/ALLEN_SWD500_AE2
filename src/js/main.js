
//import styles
import '../sass/main.scss';

//import html pages into bundle
import '../index.html';
import '../contact.html';
import '../uiux.html';
import '../logos.html';
import '../websites.html';
import '../python.html';

//
import Vue from 'vue';

import helloComponent from './components/hello.vue';
Vue.component('hello-component', helloComponent);

const app = new Vue({
    el: '#app',
});
