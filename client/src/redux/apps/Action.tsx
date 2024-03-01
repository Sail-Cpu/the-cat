import * as TypeAction from "./Type";
import axios from "axios";
import {Dispatch} from "redux";

const BASE_LINK = `http://localhost:3000`;

export const list = () => async (dispatch: Dispatch) => {
    try{
        const allApps = await axios.get(`${BASE_LINK}/applications`);
        dispatch({
            type: TypeAction.ALL_APPS,
            payload: allApps.data.data
        })
    }catch (error){
        dispatch({
            type: TypeAction.FAILED_REQUEST
        })
    }
}