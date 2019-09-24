
const initialState={

}
const create_event=(state=initialState,payload)=>{
    return[...state, payload.event]
}
