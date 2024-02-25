import SignUpForm from "../forms/SignUpForm";
import {Darkmode} from "../utils/colors";
import {Outlet} from "react-router-dom";
const Sign = () => {
    return(
        <div className="sign-page">
            <div className="sign-container" style={{backgroundColor: "#2D2D39"}}>
                <div className="sign-left-container">
                    <Outlet />
                </div>
                <div className="sign-right-container" style={{backgroundColor: Darkmode.fourth}}></div>
            </div>
        </div>
    )
}

export default Sign;