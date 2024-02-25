import {Darkmode} from "../utils/colors";

const SignForm = () => {
    return(
        <div className="sign-form">
            <div className="sign-form-title">
                <span>Welcome to,</span>
                <span style={{color: Darkmode.fourth}}>The Cats</span>
            </div>
            <form>
                <div>
                    <label style={{color: Darkmode.secondary}}>User name</label>
                    <input style={{borderColor: Darkmode.third ,backgroundColor: Darkmode.primary}}
                           name="username"
                           type="text"
                           placeholder="Walter"/>
                </div>
                <div>
                    <label style={{color: Darkmode.secondary}}>Email</label>
                    <input style={{borderColor: Darkmode.third ,backgroundColor: Darkmode.primary}}
                           name="mail"
                           type="text"
                           placeholder="Walter@hotmail.com"/>
                </div>
                <div>
                    <label style={{color: Darkmode.secondary}}>Password</label>
                    <input style={{borderColor: Darkmode.third ,backgroundColor: Darkmode.primary}}
                           name="mail"
                           type="password" />
                </div>
                <button type="submit">Sign In</button>
            </form>
            <div className="sign-form-footer" style={{borderColor: Darkmode.secondary}}>
                <span style={{color: Darkmode.secondary}}>or sign in with:</span>
                <div className="other-sign-pos">
                    <button style={{borderColor: Darkmode.third, backgroundColor: Darkmode.primary}}></button>
                    <button style={{borderColor: Darkmode.third, backgroundColor: Darkmode.primary}}></button>
                </div>
                <div>
                    <span style={{color: Darkmode.secondary}}>Already have an account?</span>
                    <span style={{color: Darkmode.fourth}}> Log in</span>
                </div>
            </div>
        </div>
    )
}

export default SignForm;