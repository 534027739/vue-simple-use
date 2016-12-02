// console.log('this is a test')
import Vue from 'vue';
import App from './App.vue';

let vm = new Vue({
    el: '#app',
    render: h => h(App),
    data:{
        message: 'a global data'
    },
    computed:{
        countMessage: function(){
            return this.message.length
        }
    }
})
console.log(vm.$el)