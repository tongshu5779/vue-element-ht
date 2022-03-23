<template>
    <div class="cusomerInquiries">
        <div class="title">
            <h1>客户查询/修改系统</h1>
        </div>
        
        <autoTable :headOfForm="formData" :conForm="formData1" :url="url"/>
    </div>
</template>

<script>

export default {
    data() {
        return {
           formData:[
               {
                    index:1,
                    label:"姓名",
                    name:"name",
                },
                {
                    index:2,
                    label:"电话号码",
                    name:"phone",
                },
                {
                    index:3,
                    label:"项目地址",
                    name:"address",
                },
                {
                    index:4,
                    label:"录入员",
                    name:"inputName",
                },
                {
                    index:5,
                    label:"录入时间",
                    name:"inputDate",
                },
                {
                    index:6,
                    label:"门店",
                    name:"shops",
                },
           ],
           formData1:[
               {
                    flag:1,
                    label:"预留电话",
                    type:"text",
                    name:'phone'
                },
                {
                    flag:2,
                    label:"客户姓名",
                    type:"text",
                    name:'name'
                },
                {
                    flag:3,
                    label:"项目地址",
                    type:"text",
                    name:'address'
                },
                {
                    flag:4,
                    label:"所属门店",
                    type:"options",
                    name:'shops',
                    data:[
                        {
                            value: '选项1',
                            label: '全部门店'
                        }, 
                        {
                            value: '选项2',
                            label: '北京店'
                        }, 
                        {
                            value: '选项3',
                            label: '上海店'
                        }, 
                        {
                            value: '选项4',
                            label: '百纳店'
                        }, 
                        {
                            value: '选项5',
                            label: '河西店'
                        }]
                    }],
                    url:"TableData",
                }
    },
    computed: {},
    methods: {
        /* getTableData(){
            this.$store.dispatch("TableData").then((res)=>{
                 this.tableData=res;
                 console.log(res)
            }).catch(()=>{

            })
        } */
    },
    mounted() {},
    }
</script>
<style lang='stylus' scoped>

</style>