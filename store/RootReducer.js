import { combineReducers } from "@reduxjs/toolkit";
import FormReducer from "./slice/formSlice";
import AuthReducer from './slice/authSlice'


const RootReducer = combineReducers({
    form: FormReducer,
    auth: AuthReducer
})


export default RootReducer
