<template>
    <el-container>
        <!--<el-aside width="20%">
                aside
        </el-aside>-->
        <sidebar/>
        <el-container>
            <el-header height="100px">header</el-header>
            <el-main> 
                <router-view/>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import sidebar from "./components/sidebar"
export default {
    components: {sidebar},
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
    .el-aside{
        background-color:rgb(48, 65, 86);
    }
    .el-container{
        .el-header{
            border-bottom:1px solid #333;
        } 
    }
}
</style>