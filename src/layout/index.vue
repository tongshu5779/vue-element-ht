<template>
    <el-container>
        <sidebar>
        </sidebar>
        <el-container>
            <el-header height="70px">
                <headerC/>
            </el-header>
            <el-main> 
                <router-view/>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import sidebar from "./components/sidebar"
import headerC from "./components/header"
export default {
    components: {sidebar,headerC},
    data() {
        return {

        };
    },
    computed: {},
    watch: {},
    methods: {},
    mounted() {},
    }
    
</script>
<style  lang="stylus" scoped>
.el-container{
    height:100%
    .el-aside{
        background-color:rgb(48, 65, 86);
    }
    .el-container{
        .el-header{
            border-bottom:1px solid #ccc;
        } 
    }
}
</style>