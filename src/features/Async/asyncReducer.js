import { ACTION_STARTED, ACTION_FINISHED, ACTION_ERROR } from "./asyncConstants";
import { createReducer } from "../../app/common/util/createReducer";

const initialState={
    loading:false
}

export const action_started=(state,payload)=>{

    return{loading:true}
}
export const action_finished=(state,payload)=>{

    return{loading:false}
}
export const action_error=(state,payload)=>{

    return{loading:false}
}


export default createReducer(initialState,{
    [ACTION_STARTED]:action_started,
    [ACTION_FINISHED]:action_finished,
    [ACTION_ERROR]:action_error
})