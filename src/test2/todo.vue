<template>
    <ul>
        <input >
        <li v-for="(value,index) of listData">
            {{index}} : {{value.thing}}

        </li>
    </ul>
</template>
<script>
    export default {
        name: 'todo',
        data (){
            return {
                listData: [
                    {
                        thing: 'get up'
                    },
                        {
                        thing: 'eat meal'
                    },
                        {
                        thing: 'sleep'
                    }
                ]
            }
        }
    }
</script>