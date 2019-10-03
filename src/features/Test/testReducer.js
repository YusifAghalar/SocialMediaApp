import { INCREMENT_COUNTER, DECREMENT_COUNTER, INCREMENT_COUNTER_ASYNC, DECREMENT_COUNTER_ASYNC } from "./testConstants";
import { createReducer } from "../../app/common/util/createReducer";
import { action_started,action_finished } from "../Async/asyncActions";
const initialState={
    data:42
}

const increment_counter=(state=initialState,payload)=>{
    return{data:state.data+1}
}
const decrement_counter=(state=initialState,payload)=>{
    return{data:state.data-1}
}


// const testReducer=(state=initialState,action)=>{ 
//     switch (action.type) {
//         case INCREMENT_COUNTER:    
//             return {...state,data:state.data+1}            
//         case DECREMENT_COUNTER:    
//             return {...state,data:state.data-1}  
//         default:
//             return state;
//     }
    
// };
export default createReducer(initialState,{
    [INCREMENT_COUNTER]:increment_counter,
    [DECREMENT_COUNTER]:decrement_counter
})