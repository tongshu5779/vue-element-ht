<template>
    <div class="table">
        <div class="con">
            <div>
                <el-form  label-width="80px"  
                    :model="formD"
                    >
                    <el-form-item :label="con.label" v-for="con in conForm"
                        :key="con.flag" >
                        <el-input  v-if="con.type=='text'" v-model="formD[con.name]" placeholder="请输入">
                        </el-input>
                        <el-select v-model="formD[con.name]" placeholder="请选择" v-if="con.type=='options'">
                            <el-option
                                v-for="item in con.data"
                                :key="item.value"
                                :label="item.label"
                                :value="item.label">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
                <el-button class="btn" @click="getTableData">查询</el-button>  
            </div>
            <el-table
                height="400"
                :data="tableData"
                >
                <el-table-column class="op" label="操作" fixed width="180">
                    <template slot-scope="scope" >
                        <el-button class="modify" @click="handleEdit(scope.$index, scope.row)">
                            <span>修改</span>
                        </el-button>
                        <el-button class="del" @click="handleDelete(scope.$index, scope.row)">
                            <span>删除</span>
                        </el-button>
                    </template>
                </el-table-column> 
                <el-table-column v-for="head in headOfForm"
                    :key="head.index"
                    :prop="head.name"
                    :fixed="head.fixed"
                    :label="head.label"
                    align="center"
                    width="150"
                    >
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
import {validatePhone} from "@/utils/validata"
export default {
    name:'autoTable',
    props:{
        headOfForm:{
            type:Array
        },
        conForm:{
            type:Array
        },
        url:{

        }
    },
    data() {
        return {
            tableData:[],
            formD:{
                name:"",
                phone:"",
                address:"",
                shops:"" 
            },
        };
    },
    methods: {
        getTableData(){
            if(validatePhone(this.formD.phone)){
                this.$store.dispatch(this.url,this.formD).then((res)=>{
                    this.tableData=res.table;
                   
                }).catch(()=>{
            })   
            }else{
                this.$message({
                    message: '请输入正确的手机号码或为空',
                    type: 'warning'
                    });
            }
            /* this.$emit("getData"); */
            /* this.$store.dispatch(this.url).then((res)=>{
                this.tableData=res.table;
            }).catch(()=>{

            }) */
        }, 
        handleDelete(index, row){
            console.log(index,row)
        },
        handleEdit(index, row) {
            console.log(index, row);
      },
    },
}
</script>
<style lang='stylus' scoped>
.table{
    width:80%;
    margin:0 auto;
}
</style>