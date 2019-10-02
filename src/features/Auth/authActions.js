import { LOGIN_USER, REGISTER_USER, LOGOUT_USER } from "./authConstants";

export const login=(cred)=>{
    return{
        type:LOGIN_USER,
        payload:{
            cred
        }

    }
}
export const register=(cred)=>{
    return{
        type:REGISTER_USER,
        payload:{
            cred
        }

    }
}
export const logout=(userName)=>{
    return{
        type:LOGOUT_USER,
        payload:{
            userName
        }

    }
}