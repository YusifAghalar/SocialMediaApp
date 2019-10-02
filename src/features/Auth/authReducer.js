import { LOGIN_USER, LOGOUT_USER } from "./authConstants";
import { createReducer } from "../../app/common/util/createReducer";

const initialState={
    authenticated:false,
    currentUser:null
}

const login =(state,payload)=>{

    return{
        authenticated:true,
        currentUser:payload.cred.email
    }
}
const logout =(state,payload)=>{
    
    return{
        authenticated:false,
        currentUser:null
    }
}


export default createReducer(initialState,{
    [LOGIN_USER]:login,
    [LOGOUT_USER]:logout
})