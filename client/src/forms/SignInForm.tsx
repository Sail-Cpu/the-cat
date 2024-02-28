import {FormEvent, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
//utils
import {Darkmode} from "../utils/colors";
//redux
import { login } from "../redux/auth/Action";


const SignInForm = () => {
    const dispatch = useDispatch();
    const {isLoggedIn, message} = useSelector((state) => state.auth);
    const navigate = useNavigate();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
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
        if(isLoggedIn) console.log("ok");
        if(message){
            console.log(message)
        }
    }, [isLoggedIn, message, navigate])

    return(
        <div className="sign-form">
            <div className="sign-form-title">
                <span>Login to </span>
                <span style={{color: Darkmode.fourth}}>The Cats</span>
            </div>
            <form onSubmit={(e: FormEvent) => handleSubmit(e)}>
                <div>
                    <label style={{color: Darkmode.secondary}}>User Name / Email</label>
                    <input style={{borderColor: Darkmode.third ,backgroundColor: Darkmode.primary}}
                           name="nameEmail"
                           type="text"
                           placeholder="Walter"/>
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
                    <span style={{color: Darkmode.secondary}}>I dont have an account</span>
                    <Link to="/sign/signup"><span style={{color: Darkmode.fourth}}> Sign up</span></Link>
                </div>
            </div>
        </div>
    )
}

export default SignInForm;