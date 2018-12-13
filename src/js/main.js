//import styles
import '../sass/main.scss';

//import html pages into bundle
import '../index.html';
import '../contact.html';
import '../uiux.html';
import '../logos.html';
import '../websites.html';
import '../python.html';
import '../javascript.html';

//import components
import contact_form from './components/contact_form.vue';

// Import vue and VeeValidate
import Vue from 'vue';
import VeeValidate from 'vee-validate';
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);
Vue.use(VeeValidate);

//Set up contact form contact 
Vue.component('contact-form', contact_form);


//START ANALOGUE CLOCK JAVASCRIPT
const secondSelector = document.querySelector('.seconds'); //set up seconds constant
const minuteSelector = document.querySelector('.minutes');//set up minutes constant
const hourSelector = document.querySelector('.hours');//set up hours constant

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds(); //Get seconds
  const minutes = now.getMinutes(); //Get minutes
  const hours = now.getHours(); //Get hours
  const curr_time = hours + ":" + minutes + ":" + seconds; 

  const getSecondsDegrees = ((seconds / 60) * 360); //Work out degrees for seconds
  const getMinutesDegrees = ((minutes / 60) * 360); //Work out degrees for minutes
  const getHoursDegrees = ((hours / 60) * 360); //Work out degrees for hours

  secondSelector.style.transform = `rotate(${getSecondsDegrees}deg)`; //Move element to display seconds
  minuteSelector.style.transform = `rotate(${getMinutesDegrees}deg)`; //Move element to display minutes
  hourSelector.style.transform = `rotate(${getHoursDegrees}deg)`; //Move element to display hours
}

setInterval(setDate, 1000); //Update every 1000ms
//END OF ANALOGUE CLOCK CODE

//Vue searching 
const app = new Vue({
    el: '#app',
});
