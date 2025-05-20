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
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import MyCourses from "../Pages/Dashboard/MyCourses/MyCourses";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import AdminProfile from "../Pages/Dashboard/AdminProfile/AdminProfile";
import MyProgress from "../Pages/Dashboard/UserDashboard/MyProgroress/MyProgress";
import MyEnrolledCourses from "../Pages/Dashboard/UserDashboard/MyEnorroledcourses/MyEnroledCourses";
import UserProfile from "../Pages/Dashboard/UserDashboard/userProfile/UserProfile";


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
      { index: true, element: <AdminHome></AdminHome> },
      { path: '/dashboard/addCourse', element: <AddCourse></AddCourse> },
      { path: '/dashboard/manageUsers', element: <ManageUsers></ManageUsers> },
      { path: '/dashboard/MyCourses', element: <MyCourses></MyCourses> },
      { path: '/dashboard/AdminProfile', element: <AdminProfile></AdminProfile> },
      { path: "/dashboard/myProgress", element: <MyProgress></MyProgress> },
      { path: "/dashboard/myEnrolledCourses", element: <MyEnrolledCourses></MyEnrolledCourses> },
      { path:"/dashboard/UserProfile", element: <UserProfile></UserProfile>}
    ]
  }
]);

export default router;
