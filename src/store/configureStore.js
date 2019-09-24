import {createStore} from "redux"
import testReducer from "../features/Test/testReducer";
import {devToolsEnhancer} from "redux-devtools-extension"
import { rootReducer } from "../features/Test/rootReducer";

const configureStore = ()=>{
    const store=createStore(rootReducer,devToolsEnhancer());
    return store;
}
export default configureStore;