<template>
    <div class="sidebar">
      <el-scrollbar>
          <el-menu
            class="el-menu-vertical-demo"
            router
            background-color="#283443"
            active-text-color="#1aa0dd"
            :default-active="$route.path"
            unique-opened
            >
            <el-submenu  v-for="list in sidebar" :key="list.index" :index="list.index">
                <template slot="title">
                    <svg-icon :icon-class="list.icon"/>
                    <span>{{list.name}}</span>
                </template>
                <!-- <el-menu-item-group v-for="item in list.children" :key="item.index" :index="item.path"> -->
                <el-menu-item v-for="item in list.children" :key="item.index" :index="item.path">
                    <template slot="title">{{item.name}}</template>
                </el-menu-item>    
               <!--  </el-menu-item-group> -->
            </el-submenu>          
        </el-menu>
      </el-scrollbar> 
    </div>
</template>

<script>

export default {
    components: {},
    data() {
        return {
            sidebar:[]
        };
    },
    beforeCreate(){
       this.$store.dispatch("Sidebar").then((res)=>{
           this.sidebar=res;
       }).catch(()=>{

       })
    },
  
  }
</script>

<style lang='stylus'>
/* el样式覆盖 */
.el-submenu__title{
    font-size:16px;
    text-align: left;
    color:#ccc;
    border-bottom:1px solid rgba(210,210,210,.2);
    .svg-icon{
        font-size:20px;
        margin-right:5px;
    }
    &:hover{
        background: #3d4e62!important;
    }
}
.el-menu-item{
    font-size:15px;
    color:#666;
    text-align:left;
    color:#ccc;
    cursor: pointer;
    padding:10px 0 10px 20px;
    &:hover{
        background: #3d4e62!important;
    }
}
.el-menu{
    background-color: transparent;
}
</style>
<style lang='stylus' scoped>
.sidebar{
    width:20%;
    max-width:300px;
    background-color:#283443;
}
</style>