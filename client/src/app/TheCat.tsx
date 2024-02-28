import { useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import App from "../App";
import SignInForm from "../forms/SignInForm";
import Sign from "../pages/Sign";
import SignUpForm from "../forms/SignUpForm";

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
    const { isLoggedIn } = useSelector((state) => state.auth);

    return (
        <RouterProvider router={isLoggedIn ? isLoggedRouter : notLoggedRouter}>
            <Route
                path="/"
                element={isLoggedIn && <App/>}
            />
        </RouterProvider>
    );
}

export default TheCat;