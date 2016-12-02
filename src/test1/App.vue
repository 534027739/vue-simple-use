<template>
    <div id='app' :title='title'>
        <!--title作为一个dom属性被绑定在数据中-->
        {{ msg }}
        <p>This part show global data --> {{message}}</p>
        <p v-if='seen' @click="handleChage">You Can See Me</p>
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
                title: 'vue',
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