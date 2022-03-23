<template>
    <div class="headerC">
        <div class="logo">
            <img src="@/assets/logo.png">
        </div>
        <div class="menu">
            <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                    个人信息<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item icon="el-icon-plus">修改密码</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-plus">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>

export default {
    components: {},
    data() {
        return {

        };
    },
    computed: {},
    methods: {},
    mounted() {},
    }
</script>
<style lang='stylus'>
.el-dropdown{
    font-size:16px;
}
</style>
<style lang='stylus' scoped>
.headerC{
    width:100%;
    height:70px;
    .logo{
        width:200px;
        float:left;
        height:100%;
        padding:15px;
        img{
            width:100%;
            height:100%
        }
    }
    .menu{
        width:15%;
        float:right;
        line-height:70px;
    }
}
</style>