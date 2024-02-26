import axios from "axios";
import { Dispatch } from "redux";
import * as TypeAction from "./Type";
import {User} from "../Interfaces";

export const register = (userData: User) => async (dispatch: Dispatch) => {
    try{
        const {username, email, password} = userData;
        const request = await axios.post("http://localhost:3000/signup", {
            username,
            email,
            password
        })

        if(request.data.data){
            dispatch({
               type: TypeAction.REGISTER_SUCCESS,
               payload: request.data.data
           })
            window.sessionStorage.setItem("auth", request.data.data)
        }
    }catch (error) {
        dispatch({
            type: TypeAction.REGISTER_FAILED,
            message: error.response.data.message
        });
    }
}