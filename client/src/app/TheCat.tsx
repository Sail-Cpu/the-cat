import { useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
        path: "/",
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
        <RouterProvider router={isLoggedIn ? isLoggedRouter : notLoggedRouter} />
    );
}

export default TheCat;