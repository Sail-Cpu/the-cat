import * as ActionType from "./Type";
import {AuthAction, AuthState} from "../Interfaces";

const INITIAL_STATE = {
    user: {},
    isLoggedIn: false
}

const authReducer = (state: AuthState = INITIAL_STATE, action: AuthAction) => {
    switch (action.type){
        case ActionType.REGISTER_SUCCESS:
            return{
                user: action.payload,
                isLoggedIn: true
            }
        case ActionType.REGISTER_FAILED:
            return {
                ...state,
                message: action.message
            }
        default:
            return state
    }
}

export default authReducer;