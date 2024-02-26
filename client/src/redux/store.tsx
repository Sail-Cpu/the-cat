import {combineReducers, configureStore} from "@reduxjs/toolkit";
//reducer
import {reducer as AuthReducer} from "./auth";

const storeRouter = combineReducers({
    auth: AuthReducer
})

const store = configureStore({
    reducer: storeRouter,
    devTools: true
})

export default store;