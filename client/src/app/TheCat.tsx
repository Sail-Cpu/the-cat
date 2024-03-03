import { useSelector } from "react-redux";
import {createBrowserRouter, Navigate, Route, BrowserRouter, RouterProvider, Routes} from "react-router-dom";
import App from "../App";
import SignInForm from "../forms/SignInForm";
import Sign from "../pages/Sign";
import SignUpForm from "../forms/SignUpForm";
import {State} from "../redux/Interfaces";

const isLoggedRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />
    }
]);

const notLoggedRouter = createBrowserRouter([
    {
        path: "/sign",
        element: <Sign />,
        children: [
            {
                path: "",
                element: <SignInForm />
            },
            {
                path: "signup",
                element: <SignUpForm />
            }
        ]
    }
]);

const TheCat = () => {
    const { isLoggedIn } = useSelector((state: State) => state.auth);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/sign/" element={<Sign />} >
                    <Route path="/sign/" element={<SignInForm />} />
                    <Route path="/sign/signup" element={<SignUpForm />} />
                </Route>
                <Route path="/" element={isLoggedIn ? <App /> : <Navigate to="/sign" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default TheCat;