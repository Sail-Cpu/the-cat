import {AppsAction, AppState} from "../Interfaces";
import * as TypeAction from "./Type"

const INITIAL_STATE = {
    apps: []
}

const Reducer = (state: AppState = INITIAL_STATE, action: AppsAction) => {
    switch (action.type){
        case TypeAction.ALL_APPS:
            return{
                ...state,
                apps: action.payload
            }
        case TypeAction.ADD_APP:
            return {
                ...state,
                apps: [...state.apps, action.payload]
            }
        case TypeAction.FAILED_REQUEST:
            return state
        default:
            return state;
    }
}

export default Reducer;