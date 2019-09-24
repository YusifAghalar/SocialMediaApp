import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./testConstants";

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