import Vue from 'vue';
import Vuex from 'vuex';
import {INCREMENT,DECREMENT} from './constants.js';
Vue.use(Vuex);//Vuex 通过 store 选项，提供了一种机制将状态从根组件『注入』到每一个子组件中

const state = {
    "count": 0
}
//mutations是真是操控state的变化 
//每一个mutation实例都把当前状态树作为默认的第一个参数
//如需更多参数从第二位起算
// 每一个mutation实例必须是一个同步操作，这样来确保每一步的变化都能通过插件记录下来
const mutations = {
    [INCREMENT] (state){
        state.count++;
    },
    [DECREMENT] (state) {
        state.count--
    }
}

// getters are functions
const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}


export default new Vuex.Store({
    state,
    mutations,
    getters
})