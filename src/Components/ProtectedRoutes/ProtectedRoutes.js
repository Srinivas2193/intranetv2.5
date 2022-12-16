import React from "react";
import { Outlet, Navigate, Link } from "react-router-dom";
import Logo from "./../../Images/ideyalabsLogo.png";
//import Logo from "./../../assets/Logos/ideyalabsLogo.png";
import Footer from "../Footer/Footer";
//import Footer from './../../Pages/Footer/Footer';

const ProtectedRoute = () => {
  const status = localStorage.getItem("status");
  console.log(status);
  // const LoggedIn = status;

  if (status === "false") {
    return <Navigate to={`/login`} />;
  } else {
  }
  return (
    <>
      <div className="flex flex-row justify-between bg-gradient-to-r from-orange-200 to-blue-300">
        <div>
          <h1
            className="p-2 text-5xl font-bold text-gray-500"
            style={{ fontStyle: "font-family: 'Lato', sans-serif" }}
          >
            <span style={{ color: "#eb7524", marginRight: "" }}>
              ideyaLabs{" "}
            </span>
            <span style={{ color: "#285d93" }}>Intranet</span>
          </h1>
        </div>
        <div>
          <img src={Logo} alt="logo" className="h-20 p-2 " />
        </div>
      </div>
      <div >
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default ProtectedRoute;
