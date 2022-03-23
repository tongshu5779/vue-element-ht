import {RECEIVE_USER_INFO} from './types'
import {setToken} from "@/utils/auth"
export default {
  //用户信息token
  [RECEIVE_USER_INFO] (state, result) {
    state.token=result.token;
    setToken(result.token);
  },
}
