import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
//reducer
import { reducer as AuthReducer } from "./auth";
import { reducer as AppsReducer } from "./apps";
import {list} from "./apps/Action";
import {Reducer} from "react";
import {AppsAction, AppState, AuthAction, AuthState} from "./Interfaces";

const rootReducer: Reducer<{ auth: AuthState | undefined; apps: AppState | undefined; }, AuthAction | AppsAction> = combineReducers({
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