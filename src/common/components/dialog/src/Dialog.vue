<template>
    <div>
        <transition name="dialog">
            <div class="zheui-dialog-box" v-show="visible">
                <slot name="dialog-by">
                    <div class="zheui-dialog-by">
                        <p class="dialog-t">{{title}}</p>
                        <p class="dialog-con">{{content}}</p>
                    </div>
                </slot>
                <slot name="dialog-btn">
                    <div class="dialog-btn-w">
                        <span class="dilog_btn_ok" @click="handleOk">{{okText}}</span>
                        <span v-if="showCancel" class="dilog_btn_cancel" @click="handleCancel">{{cancelText}}</span>
                    </div>
                </slot>
            </div>
        </transition>
        <transition name="layer" @after-leave="afterLeave">
            <div class="zheui-dialog-layer" v-show="visible"></div>
        </transition>
    </div>
</template>
<script>
    import './dialog.css'

    export default {
        name: 'dialog',
        data() {
            return {
                callByFun: false 
            }
        },
        props: {
            visible: false,
            title: {
                type: String,
                default: '温馨提示'
            },
            content: {
                type: String,
                default: ''
            },
            okText: {
                type: String,
                default: '确定'
            },
            cancelText: {
                type: String,
                default: '取消'
            },
            showCancel: {
                type: Boolean,
                default: true
            },
            cbOk: {
                type: Function,
                default: function(){
                    this.visible = false;
                }
            },
            cbCancel: {
                type: Function,
                default: function(){
                    this.visible = false;
                }
            }
        },
        methods: {
            handleOk() {
                if(this.cbOk){
                    this.cbOk()
                }
            },
            handleCancel() {
                if(this.cbCancel){
                    this.cbCancel()
                }
            },
            afterLeave() {
                console.log(this.callByFun)
                if(this.callByFun){
                    document.getElementById('ct').removeChild(this.$el);    
                }
            }
        },
        mounted() {
                document.body.addEventListener('touchstart', function () { 
                    //...空函数即可, ios :active hack
                });  
        }
    }
</script>