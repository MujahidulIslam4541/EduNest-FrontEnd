// src/routes/router.jsx
import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layOuts/MainLayOut";
import Home from "../Pages/HomePage/Home.jsx/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: [
      { path: "/", element: <Home></Home>}
    ],
  },
]);

export default router;
