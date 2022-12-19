import React from "react";
import './index.css'
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "../App";
import LoginPage from "../components/loginPage/LoginPage";
import "./index.css";
import SignUp from "../components/signUp/SignUp";
import Home from "../components/Home";
import Orders from "../components/Orders";
import Checkout from "../components/checkout/Checkout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/signup",
        element: <SignUp />,
    },
    {
        path: "/dashboard",
        element: <Home/>,
    },
    {
        path: "/order",
        element: <Orders/>,
    },
    {
        path: "/checkout",
        element: <Checkout/>,
    },
]);

export default router;
