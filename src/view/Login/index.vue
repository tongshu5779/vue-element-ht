<template>
    <div class="login">
        <el-form class="login-form" ref="loginForm" :rules="rules" :model="userInfo">
            <div class="title">
                <h2>用户后台管理系统</h2>
            </div>
            <el-form-item class="login-form-item" prop="username">
                <span class="svg-container">
                    <svg-icon icon-class="user" ></svg-icon>
                </span>
                <el-input class="login-input login-username" v-model="userInfo.username" placeholder="Username"  autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item class="login-form-item" prop="password">
                <span class="svg-container">
                    <svg-icon icon-class="password" ></svg-icon>
                </span>
                <el-input class="login-input login-password" v-model="userInfo.password" placeholder="Password" type="password" autocomplete="off"></el-input>
            </el-form-item>
            <el-button class="login-btn" type="primary" @click="submitForm()" :loading=loading>登 录</el-button>
        </el-form>
    </div>
</template>

<script>
//import SvgIcon from '@/components/SvgIcon'
export default {
    data() {
        var validateUsername = (rule,value,callback) =>{
            if(value === ""){
                callback(new Error("账号不得为空"))
            }else{
                callback()
            }
        };
        var validatePassword = (rule,value,callback) =>{
            if(value === "" || value.length<6){
                callback(new Error("密码不得小于6位数"))
            }else{
                callback()
            }
        };
        return {
            userInfo:{
                username:"",
                password:""
            },
            rules:{
                username:[{ validator:validateUsername, trigger:'blur'}],
                password:[{ validator:validatePassword, trigger:'blur'}]
            },
            loading:false
        };     
    },
    //components:{SvgIcon},
    computed: {},
    methods: {
        submitForm(){
           this.$refs.loginForm.validate(valid =>{
               if(valid){
                   this.loading=true;
                   this.$store.dispatch('login',this.userInfo) 
                   .then(() => {
                       this.$router.push("/");
                       this.loading=false;
                   }).catch(() => {
                        this.$message.error('用户名或密码错误');
                        this.loading=false;
                   })
               }else{
                   return false;
               }
            })
        }
    },
    mounted() {},
    }
</script>
<style lang='stylus'>
//reset 
.el-form-item__content{
    font-size:16px;
}
.el-input{
    width:88%;
    input{
        background-color:transparent;
        border:none;
    }
}
</style>
<style  lang='stylus' scoped>
.login{
    width:100%;
    height:100%;
    background-color:#283443;
    .login-form{
        width:90%;
        height:350px;
        max-width:400px;
        position:absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        margin:auto;
        .title{
            height:35px;
            color:#fff;
            margin-bottom:40px;
            letter-spacing: 1px;
        }
        .login-btn{
            width:100%;
            font-size:18px;
            height:40px;
        }
        .login-form-item{
            border: 1px solid rgba(255, 255, 255, 0.1);
            background: rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            color: #454545;
            .svg-container{
                padding: 10px 5px 6px 15px;
                color: #999;
                vertical-align: middle;
                width: 30px;
                display: inline-block;
            }
        }
    }
}
</style>