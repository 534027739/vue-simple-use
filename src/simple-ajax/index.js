import Vue from 'vue';
import store from './store';
import simpleAjax from './components/simpleAjax.vue';

let vm = new Vue({
    el: '#app',
    store,
    render: h => h(simpleAjax)
});
