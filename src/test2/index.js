import Vue from 'vue';
import Todo from './todo.vue';

let vm = new Vue({
    el: '#app',
    render: h => h(Todo)
});