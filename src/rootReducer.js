import { combineReducers } from "redux";
import testReducer from "./features/Test/testReducer";
import eventReducer from "./features/Event/eventReducer";
import {reducer as FormReducer} from 'redux-form';
import modalReducer from "./features/Modal/modalReducer";
import authReducer from "./features/Auth/authReducer";
import asyncReducer from "./features/Async/asyncReducer";

export const rootReducer= combineReducers({
    test:testReducer,
    event:eventReducer,
    form:FormReducer,
    modals:modalReducer,
    auth:authReducer,
    async:asyncReducer
})