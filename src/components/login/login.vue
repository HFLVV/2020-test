<template>
    <div>
        <div class="context">
            <div>手机号码</div>
            <div>
             <el-input v-model="input" type="Number" placeholder="请输入手机号码"></el-input>
             <el-input v-model="passwordvalue" type="password" placeholder="请输入密码"></el-input>
            </div>
            <el-button @click="submit">默认按钮</el-button>
        </div>
    </div>
</template>
<script>
// import Utils from "../js/utils"
export default {
    data(){
        return{
            input:'',
            passwordvalue:''
        }
    },
    mounted(){
      
    },
    methods:{
        submit(){
        //    let a=Utils.encrypt(this.passwordvalue,"wertyuiofgh")
        }
    }

}
</script>