import { combineReducers } from "redux";
import testReducer from "./features/Test/testReducer";
import eventReducer from "./features/Event/eventReducer";
import {reducer as FormReducer} from 'redux-form';

export const rootReducer= combineReducers({
    test:testReducer,
    event:eventReducer,
    form:FormReducer,
})