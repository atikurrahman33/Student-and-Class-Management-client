import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllCourses from "../Pages/AllCourses/AllCourses";
import TeachOn from "../Pages/TeachOn/TeachOn";

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
        }
    ]
    },

  ]);