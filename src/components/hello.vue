<template>
    <div id='hello'>
        Hello,{{name}},welecom to me vue demo~
    </div>
</template>

<script>
    export default {
        data (){
            return {
                name: 'quxiaoda'
            }
        },
        created (){
            console.log('this component is created')
        }
    }
</script>