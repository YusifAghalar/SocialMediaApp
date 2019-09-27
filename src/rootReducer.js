import { combineReducers } from "redux";
import testReducer from "./features/Test/testReducer";
import eventReducer from "./features/Event/eventReducer";

export const rootReducer= combineReducers({
    test:testReducer,
    event:eventReducer
})