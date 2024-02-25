import SignForm from "../forms/SignForm";
import {Darkmode} from "../utils/colors";
const Sign = () => {
    return(
        <div className="sign-page">
            <div className="sign-container" style={{backgroundColor: "#2D2D39"}}>
                <div className="sign-left-container">
                    <SignForm />
                </div>
                <div className="sign-right-container" style={{backgroundColor: Darkmode.fourth}}></div>
            </div>
        </div>
    )
}

export default Sign;