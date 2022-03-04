const Mock = require('mockjs');

const getResource=()=>{
    let resulte=[];
    for(let i=0;i<=10;i++){
        resulte.push({
            id:i,
            children:[{
                id:i-'1'
            }]
        })
    }
    return resulte;
}

Mock.mock("http://localhost:8088/getResoure",'get',getResource())