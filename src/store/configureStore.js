import {createStore,applyMiddleware} from "redux"
import testReducer from "../features/Test/testReducer";
import {devToolsEnhancer,composeWithDevTools} from "redux-devtools-extension"
import { rootReducer } from "../rootReducer";
import thunk from "redux-thunk";



const configureStore = ()=>{

    const middleware=[thunk];

    const composedEnhancer=composeWithDevTools(appliMiddleware(...middleware))
    const store=createStore(rootReducer,composedEnhancer);
    return store;
}
export default configureStore;