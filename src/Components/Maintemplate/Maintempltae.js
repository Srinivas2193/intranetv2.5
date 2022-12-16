import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet,useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
const MainTemplate = () => {

const[visible, setVisible]=useState(false);
const navigate=useNavigate();
  const status= localStorage.getItem("status");
  console.log(status)

if(status === "false"){
  navigate('/login')
}

  return (
    <>
      {status && <div>
      <Navbar />

      <div className=" flex flex-row justify-center overflow-y-scroll ">
        <div>
        <Sidebar />
        </div>

        <div className="min-w-[773px]">
      <Outlet />
        </div>

      </div>
      </div>}

    </>
  );
};

export default MainTemplate;
