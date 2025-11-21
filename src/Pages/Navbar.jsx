import React from "react";
import Logo from "../Components/Logo";
import { Link, NavLink } from "react-router";
import { GoArrowUpRight } from "react-icons/go";
import useAuth from "../Hooks/useAuth";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user ,logOut} = useAuth();

  const handlelogout=()=>{
      logOut()
      .then(()=>toast.success("SignOut Succesfully"))
      .catch(error=>{
        toast.error(error.message)
      })
  }
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `mr-1 px-2 py-1 rounded-md font-bold ${
            isActive ? "bg-[#caeb66] text-black font-bold " : ""
          }`
        }
      >
        Services
      </NavLink>

      <NavLink
        to="/covarage"
        className={({ isActive }) =>
          `mr-1 px-2 py-1 rounded-md font-bold ${
            isActive ? "bg-[#caeb66] text-black font-bold" : ""
          }`
        }
      >
        Covarage
      </NavLink>

      <NavLink
        to="/about-us"
        className={({ isActive }) =>
          `mr-1 px-2 py-1 rounded-md font-bold ${
            isActive ? "bg-[#caeb66] text-black font-bold" : ""
          }`
        }
      >
        About Us
      </NavLink>

      <NavLink
        to="/pricing"
        className={({ isActive }) =>
          `mr-1 px-2 py-1 rounded-md font-bold ${
            isActive ? "bg-[#caeb66] text-black font-bold" : ""
          }`
        }
      >
        Pricing
      </NavLink>

      <NavLink
        to="/blog"
        className={({ isActive }) =>
          `mr-1 px-2 py-1 rounded-md font-bold ${
            isActive ? "bg-[#caeb66] text-black font-bold" : ""
          }`
        }
      >
        Blog
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `mr-1 px-2 py-1 rounded-md font-bold ${
            isActive ? "bg-[#caeb66] text-black font-bold" : ""
          }`
        }
      >
        Contact
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-white shadow-sm rounded-2xl p-2 lg:p-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="text-xl ml-5">
          <Logo></Logo>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end flex gap-3 rounded-2xl">
        {user ? (
          <>
           <Link onClick={handlelogout} className="btn">
            Sign Out
          </Link>
           <Link className="btn bg-primary">
              Be a rider
            </Link>
          
          </>

         
        ) : (
          <>
            <Link to="/login" className="btn">
              Sign In
            </Link>
            <Link to="/register" className="btn bg-primary">
              Sign Up
            </Link>
          </>
        )}
      </div>
      <div className="rounded-full hidden  lg:block p-2 bg-primary ml-1.5">
        <GoArrowUpRight />
      </div>
    </div>
  );
};

export default Navbar;
