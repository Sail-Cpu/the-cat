import { LightMode } from "../utils/colors";
import {Outlet} from "react-router-dom";
const Sign = () => {
    return(
        <div className="sign-page">
            <div className="sign-container" style={{backgroundColor: "#fff"}}>
                <div className="sign-left-container">
                    <Outlet />
                </div>
                <div className="sign-right-container" style={{backgroundColor: LightMode.fourth}}></div>
            </div>
        </div>
    )
}

export default Sign;