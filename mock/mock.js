const Mock = require('mockjs');
const ModuleConcatenationPlugin = require('webpack/lib/optimize/ModuleConcatenationPlugin');
import table from './tableData'

const tokens ={
    admin:{
        token:"admin-token"
    },
    editor:{
        token:"editor-token"
    }
}
const user={
    'admin-token':{
        roles:['admin'],
        name:'Super Admin'
    },
    'editor-token':{
        roles:['editor'],
        name:'Normal Edior'
    }
}
const AdminSidebar = [
    {
        name:"客户系统",
        path:"/customerSys",
        index:"1",
        icon:"customerSys",
        children:[
            {
                name:"客户录入系统",
                path:"/cusomerEntry"
            },
            {
                name:"客户查询/修改",
                path:"/cusomerInquiries"},
        ]
    },
    {
        name:"送货单系统",
        path:"/deliveryReceiptSys",
        index:"2",
        icon:"deliveryReceiptSys",
        children:[
            {
                name:"送货单录入",
                path:"/deliveryNoteEntry"
            },
            {
                name:"送货单查询/修改",
                path:"/deliveryOrderQuery"
            },
            {
                name:"送货单导出",
                path:"/deliveryNoteExport"
            },
        ]
    },
    {
        name:"施工单系统",
        path:"/constructionManagementSys",
        index:"3",
        icon:"constructionManagementSys",
        children:[
            {
                name:"施工单录入",
                path:"/constructionOrderEntry",
            },
            {
                name:"施工管理系统",
                path:"/constructionManagement",
            },
        ]
    },
    {
        name:"竣工验收系统",
        path:"/CompletionAcceptance",
        icon:"CompletionAcceptance",
        index:"4",
        children:[
            {
                name:"竣工验收",
                path:"/completionAcceptance",
            }
        ]
    },
    {
        name:"售后服务系统",
        path:"/afterService",
        icon:"afterService",
        index:"5",
        children:[
            {
                name:"售后服务",
                path:"/afterService",
            }
        ]
    },
]
Mock.mock("/userLogin",'post',(option)=>{
    const userInfo=JSON.parse(option.body);
    if(userInfo.username === 'admin' && userInfo.password === '123456'){
        return {
             code:200,
             desc:"成功",
             data:tokens['admin']
        }
    }else if(userInfo.username !== 'admin' || userInfo.password !="123456"){
        return{
             code:400,
             error:"账户密码错误"
        }
    }else{
        return{
             code:500,
             error:"账号不存在"
        }
    }
})
Mock.mock("/reqSidebar","get",(option)=>{
    return AdminSidebar;
})
Mock.mock("/reqTableData","post",(option)=>{
    const formTable=JSON.parse(option.body);
    const name=formTable.name;
    const phone=formTable.phone;
    const address=formTable.address;
    const shops=formTable.shops;

    return table;
})
Mock.mock("/reqUsersData","post",(option)=>{
    return option;
})