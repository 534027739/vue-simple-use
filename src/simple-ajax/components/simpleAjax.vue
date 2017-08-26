<template>
    <ul id="app">
        <div class="title">A simple-ajax demo to test axios</div>
        <p class="tips">请在线上环境体验</p>
        <button @click="sendAjax">
            点击发起一个请求
        </button>
        <p v-if="isFetching">Loading....</p>
        <ul v-if="shopData.length">
            <li v-for="item in shopData">
                {{item.id}}
            </li>
        </ul>
        <div v-else>暂无数据</div>
    </div>
</template>

<style>
    button{border:1px solid #ccc;border-radius: 3px;margin-bottom: 10px;}
    .title{font-size: 14px;color: #42b983;margin-bottom: 5px;}
    .tips{font-size: 12px;color: #42b983;margin-bottom: 10px;}
    ul{margin-top: 10px;}
</style>

<script>
    import { mapState, mapActions ,mapGetters } from 'vuex';

    export default {
        name: 'simple-ajax',
        computed: {
            ...mapState([
                'isFetching',
                'postData'
            ]),
            ...mapGetters([
                'shopData'
            ])
        },
        methods: {
            ...mapActions([
                'sendAjax'
            ])
            // ,
            // sendAjax: function(){
            //     this.$store.dispatch('sendAjax');
            // }
        }
    }
</script>