<template>
    <div>
        <div class="title">A todoList demo use vuex</div>
        <input type="text" v-model="inputValue"/>
        <button @click="addTodos">Add Todo</button>
        <ul>
            <list-item
                v-for="(value,index) of filterData"
                :index="index"
                :thing="value.thing"
                :isDone="value.done"
            ></list-item>
        </ul>
        <p v-if="todos.length">
            Show:  
            <footer-item
                filter="SHOW_ALL"
                text="ALL"
            ></footer-item> , 
            <footer-item
                filter="SHOW_ACTIVE"
                text="ACTIVE"
            ></footer-item> , 
            <footer-item
                filter="SHOW_COMPLETED"
                text="COMPLETED"
            ></footer-item>
        </p>
    </div>
</template>
<style>
    input,button{border:1px solid #ccc;border-radius: 3px;}
    .title{font-size: 14px;;color: #42b983;margin-bottom: 10px;}
</style>
<script>
    import {mapMutations, mapState, mapGetters} from 'vuex'
    import listItem from './list.vue';
    import footerItem from './footer.vue';  

    export default {
        name: 'todo',
        data(){
            return {
                inputValue: ''
            }
        },
        components:{
            "list-item": listItem,
            'footer-item': footerItem
        },
        computed: {
            ...mapState([
            'todos'
            ]),
            ...mapGetters([
                'filterData'
            ])
        },
        methods: {
            addTodos: function(){
                // console.log(this.todos)                
                let payload = {
                    id: this.todos.length + 1,
                    thing: this.inputValue,
                    done: false
                }
                // console.log(payload)
                this.$store.commit('addTodo', payload);
                this.inputValue = '';
            }
        }

    }
</script>