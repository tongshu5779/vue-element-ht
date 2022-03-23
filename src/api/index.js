import ajax from './ajax';
var add=process.env.API_HOST;
// 用户登录获取用户信息
export const reqUserInfo = (userInfo) => ajax( '/userLogin',userInfo,'POST')
// 获取侧边栏
export const reqSidebar = () => ajax( '/reqSidebar')
// 获取表格数据
export const reqTableData = (formData) => ajax( '/reqTableData',formData,'POST')
// 用户录入
export const reqUsersData = (usersData) => ajax( '/reqUsersData',usersData,'POST')