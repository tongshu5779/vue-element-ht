import { reqUserInfo ,reqSidebar,reqTableData,reqUsersData} from '../api';
import {RECEIVE_USER_INFO} from './types'

export default {
  // 登录
  login({commit}, userInfo) {
      return new Promise((resolve,reject) => {
          reqUserInfo(userInfo).then(response => {
            const data = response.data;
            commit(RECEIVE_USER_INFO,data);
            resolve();
      }).catch( error =>{
          reject(error)
      })
    })
  },
  //侧边栏
  Sidebar(){
    return new Promise((resolve,reject)=>{
      reqSidebar().then(response=>{
          resolve(response);
      }).catch(error =>{
          reject(error)
      })
    }) 
  },
  //表格数据
  TableData({commit},value){
    return new Promise((resolve,reject)=>{
      reqTableData(value).then(response=>{
          resolve(response);
      }).catch(error =>{
          reject(error)
      })
    }) 
  },
  //客户录入
  userEntry({commit}, usersData) {
    return new Promise((resolve,reject) => {
        reqUsersData(usersData).then(response => {
          resolve(response);
    }).catch( error =>{
        reject(error)
    })
  })
},
}
