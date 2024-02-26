import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/styles.scss';
import {Provider} from "react-redux";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
//store
import store from "./redux/store";
//pages
import Sign from "./pages/Sign";
import SignInForm from "./forms/SignInForm";
import SignUpForm from "./forms/SignUpForm";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "sign/",
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

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Provider store={store}>
          <RouterProvider router={router} />
      </Provider>
  </React.StrictMode>,
)
