import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home";
import Covarage from "../Pages/Covarage";
import AboutUs from "../Pages/Aboutus";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Rider from "../Pages/Rider/Rider";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
   Component:RootLayout,
   children:[
    {
        index:true,
        Component:Home,
    },{
      path:'/covarage',
      Component:Covarage,
    },
    {
      path:'/about-us',
      Component:AboutUs,
    },
    {
      path:'/rider',
      element:<PrivateRoute><Rider></Rider></PrivateRoute>
    }
   ]
  },
  {
    path:'/',
    Component:AuthLayout,
    children:[
      {
        path:'/login',
        Component:Login
      },{
        path:'/register',
        Component:Register

      }
    ]
  }
]);
