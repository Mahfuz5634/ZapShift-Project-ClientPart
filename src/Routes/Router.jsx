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
import ForgetPass from "../Pages/ForgetPass";
import SendParcel from "../Pages/SendParcel/SendParcel";
import DashboardLayout from "../Layout/DashboardLayout";
import Myparcels from "../Pages/Dashboard/Myparcels";
import paybill from "../Pages/Dashboard/paybill";
import PaymentSucces from "../Pages/Dashboard/PaymentSucces";
import PaymentCancel from "../Pages/Dashboard/PaymentCancel";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/covarage",
        Component: Covarage,
      },
      {
        path: "/about-us",
        Component: AboutUs,
      },
      {
        path: "/rider",
        element: (
          <PrivateRoute>
            <Rider></Rider>
          </PrivateRoute>
        ),
      },
      {
        path: "/send-parcel",
        element: (
          <PrivateRoute>
            <SendParcel></SendParcel>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/forget-pass",
        Component: ForgetPass,
      },
    ],
  },
  {
    path:"/dashboard",
    element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children:[
      {
        path:'my-parcels',
        element:<Myparcels></Myparcels>,

      },
      {
        path:'paybill/:id',
        Component:paybill
      },
      {
        path:'payment-success',
        Component:PaymentSucces
      },
      {
        path:'payment-cancel',
        Component:PaymentCancel
      }
    ]
  },
]);
