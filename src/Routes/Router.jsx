// src/routes/router.jsx
import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layOuts/MainLayOut";
import Home from "../Pages/HomePage/Home.jsx/Home";
import Login from "../Pages/HomePage/login/Login";
import Register from "../Pages/HomePage/Register/Register";
import Error from "../components/Error/Error";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/contactUs/ContactUs";
import Classes from "../Pages/classes/classes";
import Dashboard from "../Pages/Dashboard/Dashboard";
import CourseDetails from "../Pages/courseDetails/CourseDetails";
import AddCourse from "../Pages/Dashboard/addcourse/Addcourse";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    errorElement: <Error></Error>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: '/about', element: <AboutUs></AboutUs> },
      { path: '/contact', element: <ContactUs></ContactUs> },
      { path: '/classes', element: <Classes></Classes> },
      { path: '/courseDetails', element: <CourseDetails></CourseDetails> },
      { path: "/signIn", element: <Login></Login> },
      { path: "/signUp", element: <Register></Register> }
    ],
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      { path: '/dashboard/addCourse', element: <AddCourse></AddCourse> }
    ]
  }
]);

export default router;
