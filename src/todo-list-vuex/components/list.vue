<template>
    <li :class="{done: isDone}" @click="itemClick">
        {{thing}}
    </li>
</template>
<style>
    .done{text-decoration: line-through;}
</style>
<script>
    export default {
        name: 'list-item',
        data() {
            return{

            }
        },
        computed:{
            itemClass: function(){
                return this.done?'done':''
            }
        },
        props:{
            'isDone': Boolean, 
            'index': {
                type:Number,
                required: true
            }, 
            'thing':{
                type: String,
                required: true
            }
        },
        methods:{
            itemClick(){
                this.$store.commit('toggleThing', this.index)
                // this.$emit('itemClick');
            }
        }
    }
    
</script>