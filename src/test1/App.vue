<template>
    <div id='app' :title='title'>
        <!--title作为一个dom属性被绑定在数据中-->
        {{ msg }}
        <ul>
            <li>Original message  --> {{message}}</li>
            <li class="font-red">Computed reversed message --> {{reverseMessage}}</li>
            <li>
                <span v-if='seen'>You Can See Me?</span> 
                <button @click="handleChage($event)">toggle</button>
            </li>
            <li >Test write style in data object <i :style="styleObject.box"></i></li>
        </ul>
        <Hello></Hello>
        <input type="checkbox" id="1" value ="a" v-model="inputValue" placeholder="edit me">
        <input type="checkbox" id="2" value="b" v-model="inputValue" placeholder="edit me too">
         <p>Message is: {{ inputValue }}</p>
        <p class="note">v-model属性默认是同步操作 可以手动添加.lazy变为change方式</p>
        <input v-model.lazy="inputName" placeholder="input you name">
        <p>your name is : {{inputName}}</p>
    </div>
</template>

<style>
    .font-red {color:#ef4949}
    .note{font-size: 12px;color:#008b24;background: #e7e7e7;padding: 3px; }
    input {border:1px solid #ef4949;}
</style>

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
                seen: true,
                message: 'Hello',
                inputValue: [],
                inputName: '',
                styleObject: {
                    box: {
                        display: "inline-block",
                        width: '20px',
                        height: 20+'px',
                        fontSize: 0,
                        border: 1+'px solid #ef4949',
                        transform: 'rotate(45deg)',
                        marginTop: '10px',
                        marginLeft: '10px'
                    } 
                }
            }
        },
        methods: {
            handleChage (event){
                this.seen = !this.seen;
                event && console.log('可以在参数中传入当前真实dom结构',event)
                // console.log(this.$el)
                //此方法用于更新完dom后的回调操作
                this.$nextTick(function(){
                    console.log(this.seen)
                })
            }
        },
        computed: {
            reverseMessage (){
                return this.message.split('').reverse().join('')
            }
        }
        
    }
</script>