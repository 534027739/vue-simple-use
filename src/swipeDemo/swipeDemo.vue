<template>
    <!--defaultIndex:默认页数 从0开始-->
    <swipe class="zheui-swipe1">
        <swipe-item class="slide1">Slide1</swipe-item>
        <swipe-item class="slide2">Slide2</swipe-item>
        <swipe-item class="slide3">Slide3</swipe-item>
    </swipe>
</template>

<script>
    import Swipe from "../common/components/swipe"
    import SwipeItem from "../common/components/swipe-item" 
    require("../common/css/base.css")
    require("./swipe.css")

    export default {
        name: 'swipe-demo',
        components: {
            "swipe": Swipe,
            "swipe-item": SwipeItem
        },
        methods: {
            tap: function(event,index){
                // console.log(event)
                // console.log("slide1", index)
            },
            tapFn: function(){
                console.log(1234)
            }
        }
    }
</script>