import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home";
import Covarage from "../Pages/Covarage";
import AboutUs from "../Pages/Aboutus";

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
    }
   ]
  },
]);
