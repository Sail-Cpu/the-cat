import axios from "axios";
import { Dispatch } from "redux";
import * as TypeAction from "./Type";
import {User} from "../Interfaces";

const BASE_LINK = `http://localhost:3000`;

export const register = (userData: User) => async (dispatch:  Dispatch) => {
    try{
        const {username, email, password} = userData;
        const request = await axios.post(`${BASE_LINK}/signup`, {
            username,
            email,
            password
        })
        if(request.data.data){
            dispatch({
               type: TypeAction.REGISTER_SUCCESS,
               payload: request.data.data
           })
        }
    }catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            dispatch({
                type: TypeAction.REGISTER_FAILED,
                message: error.response?.data?.message
            });
        } else {
            console.error("Unexpected error:", error);
        }
    }
}

export const login = (userData: User) => async (dispatch: Dispatch) => {
    try{
        const {nameEmail, password} = userData;

        const request = await axios.post(`${BASE_LINK}/signin`, {
            nameEmail,
            password
        })
        if(request.data.data){
            const auth_state = {
                user: request.data.data[0],
                isLoggedIn: true
            }
            window.localStorage.setItem("auth", JSON.stringify(auth_state));
            dispatch({
                type: TypeAction.REGISTER_SUCCESS,
                payload: request.data.data[0]
            })
        }
    }catch (error) {
        if (axios.isAxiosError(error)) {
            dispatch({
                type: TypeAction.REGISTER_FAILED,
                message: error.response?.data?.message
            });
        } else {
            console.error("Unexpected error:", error);
        }
    }
    return undefined;
}