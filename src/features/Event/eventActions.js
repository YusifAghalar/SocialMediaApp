import {
    CREATE_EVENT, DELETE_EVENT
} from "./eventConstants";

export const create_event = (event) => {
    return {
        type: CREATE_EVENT,
        payload: {
            event
        }
    }
}

export const delete_event=(id)=>{
    return {
        type:DELETE_EVENT,
        payload:{
            id
        }
    }
}
export const update_event=(event)=>{
    return {
        type:UPDATE_EVENT,
        payload:{
            event
        }
    }
}