import Vue from 'vue';
import store from './store'
import Count from './components/count.vue';

let vm = new Vue({
    el: '#app',
    store,
    render: h => h(Count)
});
