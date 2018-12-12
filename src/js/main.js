//import styles
import '../sass/main.scss';

//import html pages into bundle
import '../index.html';
import '../contact.html';
import '../uiux.html';
import '../logos.html';
import '../websites.html';
import '../python.html';

//import components
import contact_form from './components/contact_form.vue';

// Import vue and VeeValidate
import Vue from 'vue';
import VeeValidate from 'vee-validate';
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);
Vue.use(VeeValidate);

Vue.component('contact-form', contact_form);

const app = new Vue({
    el: '#app',
});
