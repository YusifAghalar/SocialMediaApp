import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./testConstants";
import { action_started, action_finished } from "../Async/asyncActions";

 export const increment_counter=()=>{
    return{
    type:INCREMENT_COUNTER
    }
};
export const decrement_counter=()=>{
    return{
    type:DECREMENT_COUNTER
    }
}
const delay=(ms)=>{
    return new Promise(resolve=>setTimeout(resolve,ms))
}
export const increment_counter_async=()=>{
    return async dispatch=>{
        dispatch(action_started())
        await delay(1000);
        dispatch(increment_counter())
        dispatch(action_finished());
    }  
}
export const decrement_counter_async=()=>{
    return async dispatch=>{
        dispatch(action_started())
        await delay(1000);
        dispatch(decrement_counter())
        dispatch(action_finished());
    }  
}

