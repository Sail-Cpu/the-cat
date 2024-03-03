import {FormEvent, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
//utils
import {Darkmode} from "../utils/colors";
//redux
import {register} from "../redux/auth/Action";
import {AuthAction} from "../redux/Interfaces";
import {Dispatch} from "redux";

const SignUpForm = () => {
    const {isLoggedIn, message} = useSelector((state) => state.auth);
    const navigate = useNavigate();

    const dispatch: Dispatch<AuthAction> = useDispatch();
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const username = formData.get("username");
        const email = formData.get("email");
        const password = formData.get("password");

        if (typeof username === 'string' && typeof email === 'string' && typeof password === 'string') {
            await dispatch(register({
                username: username,
                email: email,
                password: password
            }));
        }else{
            console.log("des valeur sont manquante");
        }
    }

    useEffect(() => {
        if(isLoggedIn) navigate('/');
        if(message) {
            console.log(message);
        }
    }, [isLoggedIn, message])

    return(
        <div className="sign-form">
            <div className="sign-form-title">
                <span>Welcome to,</span>
                <span style={{color: Darkmode.fourth}}>The Cats</span>
            </div>
            <form onSubmit={(e: FormEvent) => handleSubmit(e)}>
                <div>
                    <label style={{color: Darkmode.secondary}}>User Name</label>
                    <input style={{borderColor: Darkmode.third ,backgroundColor: Darkmode.primary}}
                           name="username"
                           type="text"
                           placeholder="Walter"/>
                </div>
                <div>
                    <label style={{color: Darkmode.secondary}}>Email</label>
                    <input style={{borderColor: Darkmode.third ,backgroundColor: Darkmode.primary}}
                           name="email"
                           type="text"
                           placeholder="walter@hotmail.com"/>
                </div>
                <div>
                    <label style={{color: Darkmode.secondary}}>Password</label>
                    <input style={{borderColor: Darkmode.third ,backgroundColor: Darkmode.primary}}
                           name="password"
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
                    <Link to="/sign/"><span style={{color: Darkmode.fourth}}> Log in</span></Link>
                </div>
            </div>
        </div>
    )
}

export default SignUpForm;