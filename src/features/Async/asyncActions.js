import { ACTION_STARTED, ACTION_FINISHED, ACTION_ERROR } from "./asyncConstants";

export const action_started=(state)=>{
    return {
        type:ACTION_STARTED
    }
}
export const action_finished=(state)=>{
    return {
        type:ACTION_FINISHED
    }
}
export const action_error=(state)=>{
    return{
        type:ACTION_ERROR
    }
}