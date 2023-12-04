import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllCourses from "../Pages/AllCourses/AllCourses";
import TeachOn from "../Pages/TeachOn/TeachOn";
import Review from "../Pages/Review/Review";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Details from "../Pages/Details/Details";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Payment from "../Pages/Payment/Payment";
import Dashboard from "../Layout/Dashboard/Dashboard";
import EnrollmentClass from "../Pages/EnrollmentClass/EnrollmentClass";
import Profile from "../Pages/Profile/Profile";
import MyClass from "../Layout/Dashboard/Dashboard/MyClass";
import DashboardHome from "../Layout/Dashboard/Dashboard/DashboardHome";
import AddClass from "../Layout/Dashboard/Instrauctor/AddClass";
import InstractorClass from "../Layout/Dashboard/Instrauctor/InstractorClass";
import Update from "../Layout/Dashboard/Instrauctor/Update";
import InstractorProfile from "../Layout/Dashboard/Instrauctor/InstractorProfile";
import ManageUser from "../Layout/Dashboard/Admin/ManageUser/ManageUser";
import AdminRoute from "./AdminRoute";
import ManageClasses from "../Layout/Dashboard/Admin/ManageClasses/ManageClasses";

 export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',  // No need for a specific path here
          element: <Home></Home>
        },
        {
            path:'/allclass',
            element:<AllCourses></AllCourses>
        },
        {
            path:'/teachedu',
            element:<PrivateRoute><TeachOn></TeachOn></PrivateRoute>
        },
        {
            path:'/review',
            element:<Review></Review>
        },
        {
            path:'/contact',
            element:<Contact></Contact>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<SignUp></SignUp>
        },
        {
            path:'/details/:id',
            element:<PrivateRoute><Details></Details></PrivateRoute>,
            loader: ({params})=>fetch(`https://edu-mentor-server-blush.vercel.app/allClass/${params.id}`),
        },
        {
            path:'/payment',
            element:<Payment></Payment>
        },
        {
          path:'update/:id/',
          element:<Update></Update>,
          loader: ({ params }) => fetch(`https://edu-mentor-server-blush.vercel.app/allClass/${params.id}`),
        },
    ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: 'enroll',
            element: <EnrollmentClass></EnrollmentClass>,
          },
          {
            path:'profile',
            element:<Profile></Profile>
          },
          {
            path:'myclass',
            element:<MyClass></MyClass>
          },
          {
            path: 'manageUser',
            element: <AdminRoute><ManageUser/></AdminRoute>

          },
          {
            path: 'manageClasses',
            element: <AdminRoute><ManageClasses/></AdminRoute>

          },
          {
            path:'home',
            element:<DashboardHome></DashboardHome>
          },
          {
            path:'addclass',
            element:<AddClass></AddClass>
          },
          {
            path:'insclass/',
            element:<InstractorClass></InstractorClass>
          },
          {
            path:'insprofile',
            element:<InstractorProfile></InstractorProfile>
          }
          // Admin routes
         
        ],
      },
      

  ]);