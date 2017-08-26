import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex);

const state = {
    isFetching: false,
    postData: {}
}

const mutations = {
    postStart: function(state){
        state.isFetching = true;
    },
    postSuccess: function(state, json){
        state.isFetching = false;
        state.postData = json;
    },
    postError: function(state, json){
        state.isFetching = false;
        state.postData = json;
    }
}

const getters = {
    shopData: function(state){
        console.log(state.postData.objects)
        return state.postData.objects || []
    }
}

const actions = {
    sendAjax({commit}){
        commit('postStart');
        Axios.get('/api/m/brand/getdealsbyid?order=&per_page=20&page=1&brand_id=73807&url_name=&image_model=jpg')
            .then(function(response){
                console.log(response)
                commit('postSuccess', response.data);
            })
            .catch(function(error){
                commit('postError', error)
                console.log(error)
            })
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})