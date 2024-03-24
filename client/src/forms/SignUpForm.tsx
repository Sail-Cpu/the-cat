import {FormEvent, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
//utils
import {LightMode} from "../utils/colors";
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
                <span style={{color: LightMode.fourth}}>The Cats</span>
            </div>
            <form onSubmit={(e: FormEvent) => handleSubmit(e)}>
                <div>
                    <label style={{color: LightMode.border}}>User Name</label>
                    <input style={{borderColor: LightMode.third ,backgroundColor: LightMode.primary}}
                           name="username"
                           type="text"
                           placeholder="Walter"/>
                </div>
                <div>
                    <label style={{color: LightMode.border}}>Email</label>
                    <input style={{borderColor: LightMode.third ,backgroundColor: LightMode.primary}}
                           name="email"
                           type="text"
                           placeholder="walter@hotmail.com"/>
                </div>
                <div>
                    <label style={{color: LightMode.border}}>Password</label>
                    <input style={{borderColor: LightMode.third ,backgroundColor: LightMode.primary}}
                           name="password"
                           type="password" />
                </div>
                <button type="submit">Sign In</button>
            </form>
            <div className="sign-form-footer" style={{borderColor: LightMode.border}}>
                <span style={{color: LightMode.border}}>or sign in with:</span>
                <div className="other-sign-pos">
                    <button style={{borderColor: LightMode.third, backgroundColor: LightMode.primary}}></button>
                    <button style={{borderColor: LightMode.third, backgroundColor: LightMode.primary}}></button>
                </div>
                <div>
                    <span style={{color: LightMode.border}}>Already have an account?</span>
                    <Link to="/sign/"><span style={{color: LightMode.fourth}}> Log in</span></Link>
                </div>
            </div>
        </div>
    )
}

export default SignUpForm;