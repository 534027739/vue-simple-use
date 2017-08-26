import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    todos: [],
    filters: 'SHOW_ALL'
}

const mutations = {
    addTodo: function(state, payload){
        state.todos.push(payload)
    },
    toggleThing: function(state, index){
        state.todos[index].done = !state.todos[index].done
    },
    setFilter: function(state, curFilter){
        state.filters = curFilter;
    }
}

const getters = {
    filterData: function(state){
        switch (state.filters) {
            case 'SHOW_ALL':
                return state.todos;
            case 'SHOW_ACTIVE':
                return state.todos.filter(value => !value.done)
            case 'SHOW_COMPLETED':
                return state.todos.filter(value => value.done)                        
            default :
                return state.todos;
        }
    }
}


export default new Vuex.Store({
    state,
    getters,
    mutations
});