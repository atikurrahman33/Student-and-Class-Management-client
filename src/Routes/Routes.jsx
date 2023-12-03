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

 export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
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
            element:<TeachOn></TeachOn>
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
        }
    ]
    },

  ]);