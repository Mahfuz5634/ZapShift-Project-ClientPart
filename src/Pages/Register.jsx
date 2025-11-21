import React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import useAuth from "../Hooks/useAuth";
import { toast } from "react-toastify";
import axios from "axios";

const Register = () => {
  const { registerUser, signIngoogle, updateUserProfile } = useAuth();

  const googleSignIn = () => {
    signIngoogle()
      .then(() => toast.success("Login Succesfully"))
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleregistration = (data) => {
    registerUser(data.email, data.password)
      .then(() => {

        //store the image in formdata
        const profileImg = data.photo[0];
        const formData = new FormData();
        formData.append("image", profileImg);
        

        //send the photo imgbb and get the url
        const image_api_Url = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_Image_Host
        }`;
        axios.post(image_api_Url, formData).then((res) => {
          toast.success("Succesfully Register!");


          //save the photo url and name in firebase
          const userProfile = {
            displayName: data.name,
            photoURL: res.data.data.url,
          };
          updateUserProfile(userProfile)
            .then()
            .catch((error) => {
              toast.success(error.message);
            });
        });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-15">
      <div className="w-full max-w-sm text-center">
        <h1 className="text-3xl font-extrabold text-gray-900">
          Create an Account
        </h1>
        <p className="text-gray-600 mt-1">Register with ZapShift</p>

        <form
          onSubmit={handleSubmit(handleregistration)}
          className="mt-3 space-y-4 text-left"
        >
          {/* photo */}
          <fieldset className="fieldset">
            <label className="fieldset-legend ">Profile picture</label>
            <input type="file" {...register("photo")} className="file-input" />
            <label className="label">Max size 2MB</label>
          </fieldset>

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
              <p className="text-cyan-700">Your name is needed!</p>
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
              <p className="text-red-500">Password atleast 6 character!</p>
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
        <button
          onClick={googleSignIn}
          className="w-full border border-gray-200 bg-gray-100 py-2.5 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-200 transition"
        >
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
