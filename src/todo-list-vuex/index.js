import Vue from 'vue';
import store from './store'
import Todo from './components/todo.vue';

let vm = new Vue({
    el: '#app',
    store,
    render: h => h(Todo)
});
