<template>
    <div class="cusomerEntry">
        <div class="title">
            <h1>客户录入</h1>
        </div>
        <el-form :model="users"> 
            <el-form-item label="客户姓名">
                <el-input v-model="users.name" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="客户电话">
                <el-input v-model="users.phone" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="项目地址" >
                <el-cascader
                    size="large"
                    :options="options"
                    v-model="selectedOptions"
                    >
                </el-cascader>
            </el-form-item>
            <el-form-item label="详细地址">
                <el-input v-model="users.address" placeholder="请输入"></el-input>
            </el-form-item>
        </el-form>
        <el-button @click="btn">录入</el-button>
    </div>
</template>

<script>
import { regionDataPlus ,CodeToText} from 'element-china-area-data'
import {validatePhone} from '@/utils/validata'
export default {
    components: {},
    data() {
        return {
            users:{
                name:"",
                phone:"",
                address:"",
                province:"",
                city:"",
                district:""
            },
            options: regionDataPlus,
            selectedOptions: []
        };
    },
    computed: {},
    methods: {
        btn(){
            let usersData={
                users:this.users,
                selectedOptions:this.selectedOptions
            }
            if(this.users.name==""||this.users.phone==""||this.users.address==""||this.selectedOptions==""){
                this.$message('请将输入框填写完整');
            }else if(!validatePhone(this.users.phone)){
                this.$message('请输入正确的手机号');
            }else{
                this.$store.dispatch("userEntry",usersData).then((res)=>{
                
            }).catch(()=>{

            })
            }
           /* this.selectedOptions.forEach(function(element) {
                    console.log(element,CodeToText[element]) 
            }); */
      }
    },
    mounted() {},
    }
</script>
<style lang='stylus' scoped>
.cusomerEntry{
    width:80%;
    margin:0 auto;
}
.el-cascader{
    width:100%;
}
</style>