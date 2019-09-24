import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./testConstants";
import { createReducer } from "../../app/common/util/createReducer";

const initialState={
    data:42
}

const increment_counter=(state=initialState,payload)=>{
    return{...state,data:state.data+1}
}
const decrement_counter=(state=initialState,payload)=>{
    return{...state,data:state.data-1}
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