export function validatePhone(value){
    const reg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
    if ((reg.test(value))||value=="") {
        return true
    }else{
        return false
    }
}
