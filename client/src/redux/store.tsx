import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
//reducer
import { reducer as AuthReducer } from "./auth";
import { reducer as AppsReducer } from "./apps";
import {list} from "./apps/Action";

const rootReducer = combineReducers({
    auth: AuthReducer,
    apps: AppsReducer
});

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: true
});

store.dispatch(list());

export const persistedStore = persistStore(store);