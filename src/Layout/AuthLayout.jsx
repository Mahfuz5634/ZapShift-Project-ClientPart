import React from "react";
import Logo from "../Components/Logo";
import { Outlet } from "react-router";
import authImg from "../assets/authImage.png";

const AuthLayout = () => {
  return (
    <div className="relative min-h-screen flex flex-col lg:flex-row-reverse">
      <div className="hidden lg:block fixed top-4 left-4 z-50">
        <Logo />
      </div>

      <div className="block lg:hidden w-full flex justify-center py-4">
        <Logo />
      </div>

      <div className="flex-none lg:flex-1 bg-[#fafdf0] p-0 lg:p-6 flex justify-center items-center">
        <img src={authImg} alt="" className="w-full max-w-sm mx-auto h-auto" />
      </div>

      <div className="flex-none lg:flex-1 flex flex-col items-center justify-center gap-6 py-6 lg:py-0">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
