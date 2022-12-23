import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const navigate = useNavigate();
  setTimeout(()=>{
    localStorage.setItem("status", JSON.stringify(false));
  },30*60000)
  const logout = () => {
    localStorage.setItem("status", JSON.stringify(false));

    navigate("/login");
  };
  return (
    <div className="navBarDiv ">
      <div id="navBarContainer"
        className="flex items-center bg-black justify-end bg-slate-250 drop-shadow-xl" >
        <nav id="" className="flex justify-end">
          <Link
            to="/home1"
            className="px-3 py-2 text-2xl font-semibold text-white rounded-lg hover:text-orange-500"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="px-3 py-2 text-2xl font-medium text-white rounded-lg hover:text-orange-500"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="px-3 py-2 text-2xl font-medium text-white rounded-lg hover:text-orange-500"
          >
            Contact
          </Link>
          <button
            type="button"
            onClick={logout}
            className="px-3 py-1 text-2xl font-medium text-white rounded-lg logoutButton hover:text-orange-700"
          >
            Logout
          </button>
        </nav>
      </div>
    </div>
  );
};
export default Navbar;
