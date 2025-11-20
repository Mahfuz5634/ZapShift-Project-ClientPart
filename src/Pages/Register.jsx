import React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleregistration = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-15">
      <div className="w-full max-w-sm text-center">
        <h1 className="text-3xl font-extrabold text-gray-900">
          Create an Account
        </h1>
        <p className="text-gray-600 mt-1">Register with ZapShift</p>

        <div className="flex justify-center mt-4 mb-4">
          <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center border">
            <img
              src="/default-user.png"
              alt="User"
              className="w-8 opacity-80"
            />
          </div>
        </div>

        <form
          onSubmit={handleSubmit(handleregistration)}
          className="mt-3 space-y-4 text-left"
        >
          {/* Name */}
          <div>
            <label className="block text-gray-800 mb-1">Name</label>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-green-300"
            />
            {errors.name?.type === "required" && (
              <p className="text-cyan-700">Your Name Is Needed!</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-800 mb-1">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-green-300"
            />
            {errors.email?.type === "required" && (
              <p className="text-cyan-700">Email is required!</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-800 mb-1">Password</label>
            <input
              type="password"
              {...register("password", { required: true, minLength: 6 })}
              placeholder="Password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-green-300"
            />
            {errors.password?.type === "required" && (
              <p className="text-cyan-700">Password is required!</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500">Password Atleast 6 Character!</p>
            )}
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-2.5 rounded-lg bg-[#caeb66] text-black font-semibold hover:bg-[#b5d85b] transition"
          >
            Register
          </button>
        </form>

        {/* ---- Already have account ---- */}
        <p className="mt-3 text-gray-600 text-sm text-center">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-green-600 font-medium hover:underline"
          >
            Login
          </Link>
        </p>

        {/* OR Divider */}
        <div className="flex items-center gap-3 my-5">
          <div className="h-px bg-gray-300 flex-1" />
          <span className="text-sm text-gray-500">Or</span>
          <div className="h-px bg-gray-300 flex-1" />
        </div>

        {/* Google button */}
        <button className="w-full border border-gray-200 bg-gray-100 py-2.5 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-200 transition">
          <FcGoogle size={22} />
          <span className="text-gray-700 font-medium">
            Register with Google
          </span>
        </button>
      </div>
    </div>
  );
};
export default Register;
