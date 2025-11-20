import React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import useAuth from "../Hooks/useAuth";
import { toast } from "react-toastify";

const Login = () => {
  const { signInUser } = useAuth();
  const { register, handleSubmit } = useForm();

  const handleLogin = (data) => {
    signInUser(data.email, data.password)
      .then(() => {
        toast.success("Successfully Login");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center  px-4">
      <div className="w-full max-w-sm mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900">Welcome Back</h1>
        <p className="text-gray-600 mt-1">Login with ZapShift</p>

        {/* Form */}
        <form onSubmit={handleSubmit(handleLogin)} className="mt-6 space-y-4">
          {/* Email */}
          <div>
            <label className="block text-gray-800 mb-1">Email</label>
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-300"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-800 mb-1">Password</label>
            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-300"
            />
          </div>

          <div className="text-right">
            <Link className="text-gray-600 text-sm hover:underline">
              Forget Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full  py-2 rounded-lg bg-[#caeb66] text-black font-bold hover:bg-[#b5d85b] transition"
          >
            Login
          </button>
        </form>

        {/* Register Link */}
        <p className="mt-4 text-gray-600 text-sm">
          Don’t have any account?{" "}
          <Link
            to="/register"
            className="text-green-600 font-medium hover:underline"
          >
            Register
          </Link>
        </p>

        {/* OR */}
        <div className="flex items-center gap-3 my-4">
          <div className="h-px bg-gray-300 flex-1" />
          <span className="text-sm text-gray-500">Or</span>
          <div className="h-px bg-gray-300 flex-1" />
        </div>

        {/* Google Login */}
        <button className="w-full border border-gray-300 bg-gray-100 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-200 transition">
          <FcGoogle size={22} />
          <span className="text-gray-700 font-medium">Login with Google</span>
        </button>
      </div>
    </div>
  );
};
export default Login;
