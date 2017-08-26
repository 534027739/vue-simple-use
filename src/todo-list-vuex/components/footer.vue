<template>
    <a  :class="{on:isActive}"
        @click="footerClick"
        href="#"
        >
        {{text}}
    </a>
</template>
<style>
    .on{color:#ef4949}
</style>
<script>
    import { mapState } from 'vuex';
    export default {
        name: 'footer-link',
        props: ["text","filter","parentFilter"],
        // porps: {
        //     "text": {
        //         type: String,
        //         required: true
        //     },
        //     "filter": {
        //         type: String,
        //         require: true
        //     },
        //     "parentFilter": {
        //         type: String,
        //         require: true
        //     }
        // },
        // data (){
        //     return {
        //         isActive: false
        //     }
        // },
        computed: {
            ...mapState([
                'filters'
            ]),
            isActive: function(){
                return this.filter == this.filters
            }
        },
        methods: {
            footerClick: function(){
                this.isAction = this.filter == this.filters
                // this.$emit('footerClick',this.filter)
                this.$store.commit('setFilter', this.filter)
            }
        }

    }
</script>