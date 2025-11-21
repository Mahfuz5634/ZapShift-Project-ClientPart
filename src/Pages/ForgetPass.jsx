import React from "react";
import useAuth from "../Hooks/useAuth";
import { toast } from "react-toastify";

const ForgetPass = () => {
    const {resetPassword}=useAuth();

    const resetPass=(e)=>{
       e.preventDefault();
       const email=e.target.email.value;
       resetPassword(email)
       .then(()=>{
        toast.success("Reset email sent succesfully")
        e.target.reset();
       })
       .catch(error=>{
        toast.error(error.message);
       })

    }
  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white  rounded-lg">
      <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-center">Forget Password?</h1>
      <p className="text-gray-600 mb-6 text-center">
        Enter your email address and we’ll send you a password reset link.
      </p>
      <form onSubmit={resetPass} className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1  font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="input border lg:w-full border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-300"
            required
          />
        </div>
        <button
          type="submit"
          className="py-2 rounded-lg bg-[#caeb66] text-black font-bold hover:bg-[#b5d85b] transition-colors"
        >
          Send Reset Link
        </button>
      </form>
    </div>
  );
};

export default ForgetPass;
