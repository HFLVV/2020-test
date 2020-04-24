<template>
    <div>
        <div>这里是列表页{{haha}}</div>
        <button @click="change">改变姓名</button>
   </div>
    
</template>
<script>
// import {mapState,mapMutations} from "vuex"
export default {
    data(){
        return{
        haha:"这里"
        }
    },
    methods:{
        change(){
         
            this.$store.commit("changeName","一家人")
            this.haha=this.$store.state.hehe
        }
    }
}
</script>