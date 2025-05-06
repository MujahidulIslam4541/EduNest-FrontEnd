// src/routes/router.jsx
import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layOuts/MainLayOut";
import Home from "../Pages/HomePage/Home.jsx/Home";
import Login from "../Pages/HomePage/login/Login";
import Register from "../Pages/HomePage/Register/Register";
import Error from "../components/Error/Error";
import AboutUs from "../Pages/AboutUs/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    errorElement: <Error></Error>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: '/about', element: <AboutUs></AboutUs> },
      { path: "/signIn", element: <Login></Login> },
      { path: "/signUp", element: <Register></Register> }
    ],
  },
]);

export default router;
