<template>
    <div id='app' v-bind:title='title'>
        {{ msg }}
        <p v-if='seen' v-on:click="handleChage">You Can See Me</p>
        <Hello></Hello>
    </div>
</template>

<script>
    import Hello from '../components/hello.vue'
    
    export default {
        name: 'app',
        components:{
            Hello
        },
        data () {
            return {
                title: '123',
                msg: 'Welcome to Your Vue.js App',
                seen: true
            }
        },
        methods: {
            handleChage (){
                this.seen = !this.seen;
            }
        }
    }
</script>