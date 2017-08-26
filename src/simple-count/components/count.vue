<template>
    <div id="app">
        <!--<p>count: {{$store.state.count}}</p>-->
        <p>count: {{count}}</p>        
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
    </div>
</template>
<style>
    button{border:1px solid #eee}
</style>
<script>
    import { mapState, mapMutations } from 'vuex';
    import {INCREMENT,DECREMENT} from '../store/constants.js';
    
    export default {
        name: 'simpleCount',
        data () {
            return {
            }
        },
        computed: mapState([
            'count'
        ]),
        methods: {
            ...mapMutations({
                'increment': INCREMENT,
                'decrement': DECREMENT
            })
        }
    }
</script>