// console.log('this is a test')
import Vue from 'vue';
import App from './App.vue';

let vm = new Vue({
    el: '#app',
    render: h => h(App)
})
console.log(vm.$el)