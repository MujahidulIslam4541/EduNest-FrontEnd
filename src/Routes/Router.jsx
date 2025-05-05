// src/routes/router.jsx
import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layOuts/MainLayOut";
import Home from "../Pages/HomePage/Home.jsx/Home";
import Login from "../Pages/HomePage/login/Login";
import Register from "../Pages/HomePage/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: [
      { path: "/", element: <Home></Home>},
      { path: "/signIn", element: <Login></Login>},
      { path: "/signUp", element: <Register></Register>}
    ],
  },
]);

export default router;
