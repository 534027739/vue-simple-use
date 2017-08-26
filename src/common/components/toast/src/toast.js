import Vue from 'vue';
import ToastVue from './Toast.vue';

const ToastConstructor = Vue.extend(ToastVue)

const getAnInstance = () => {
    let instance = instance || new ToastConstructor({
        el: document.createElement('div')
    })
    return instance
}

const Toast = (text, params = {}) => {
    let instance = getAnInstance(),
        delay = params.delay || 3000,
        position = params.position || ''
    console.log(instance.$el)
    
    instance.text = text;
    if(position){
        instance.position = position;
    } 

    document.getElementById('ct').appendChild(instance.$el)

    Vue.nextTick(function(){
        instance.visible = true;

        clearTimeout(instance.timeouter);
        instance.timeouter = setTimeout(function(){
            instance.visible = false;
        }, delay)
    })    
}

export default Toast