import {FormEvent, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
//utils
import {LightMode} from "../utils/colors";
//redux
import { login } from "../redux/auth/Action";
import { State } from "../redux/Interfaces";




const SignInForm = () => {
    const dispatch = useDispatch();
    const { message, isLoggedIn } = useSelector((state: State) => state.auth);
    const navigate = useNavigate();
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget as HTMLFormElement);
        const nameEmail = formData.get("nameEmail");
        const password = formData.get("password");

        if (typeof nameEmail === 'string' && typeof password === 'string') {
            await dispatch(login({
                nameEmail: nameEmail,
                password: password
            }));
            navigate('/');
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
                <span>Login to </span>
                <span style={{color: LightMode.fourth}}>The Cats</span>
            </div>
            <form onSubmit={(e: FormEvent) => handleSubmit(e)}>
                <div>
                    <label style={{color: LightMode.border}}>User Name / Email</label>
                    <input style={{borderColor: LightMode.third ,backgroundColor: LightMode.primary}}
                           name="nameEmail"
                           type="text"
                           placeholder="Walter"/>
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
                    <span style={{color: LightMode.border}}>I dont have an account</span>
                    <Link to="/sign/signup"><span style={{color: LightMode.fourth}}> Sign up</span></Link>
                </div>
            </div>
        </div>
    )
}

export default SignInForm;