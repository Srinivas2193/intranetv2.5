import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import Logo from "./../../Images/ideyalabsLogo.png";
import Footer from "../Footer/Footer";

import LoginImage from "./../../Images/Login-Images/Login.png";

export const Login = (props) => {
  // props.loginPageCall(false);
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [err1, setErr1] = useState(false);

  let navigate = useNavigate();

  // onSubmit localStorage Part
  const onSubmit = (event) => {
    event.preventDefault();

    let lsData = localStorage.getItem("userDataList");
    let parseData;
    if (lsData) {
      parseData = JSON.parse(lsData);
    } else {
      parseData = [];
    }
    if (parseData !== null && !parseData.length > 0) {
    } else {
      let i = 0;
      let userUniqueID = "";
      try {
        while (i <= parseData.length) {
          if (
            parseData[i].email === userName &&
            parseData[i].password === userPassword
          ) {
            parseData[i].loginStatus = true;
            userUniqueID = parseData[i].uniqueId;
            localStorage.setItem("userDataList", JSON.stringify(parseData));
            localStorage.setItem("status", JSON.stringify(true));
            navigate("/home1");
            break;
          } else {
          }
          i += 1;
        }
      } catch (err) {
        setErr1(true);
        setTimeout(() => {
          setErr1(false);
        }, 2500);
      }
    }
  };

  return (
    <>
      <div className="flex flex-row justify-between bg-sky-300 drop-shadow-xl">
        <div>
          <h1 className="p-2 text-5xl font-bold text-gray-500"
            style={{ fontStyle: "font-family: 'Lato', sans-serif;" }}>
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

      <div className="flex flex-row justify-center pb-16 bg-gradient-to-r from-orange-300 to-blue-300 min-w-[1200px] max-w-[1920px]">
      <div>
        <form onSubmit={onSubmit} 
        className=" login flex flex-col  bg-gradient-to-r from-blue-300 to-orange-300  justify-end w-[953px] pt-10 shadow-2xl" >
          <h2 className="text-3xl font-bold text-black mb-9 loginHeading">
            Login
          </h2>
          <br></br>
          {err1 && (
            <div className="errMessage">
              <p>Incorrect credentials, Please check and try again!</p>
            </div>
          )}
          <label className="block textColor " htmlFor="userName">
            e-Mail ID :
          </label>
          <br />
          <input
            type="text"
            name="userName"
            id="userName"
            className="border-2 rounded-full textSize form-input outline-blue-400"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            placeholder="enter your name"
          />
          <div className="text-red-500"></div>
          <br />
          <label className="block passtextColor">Password :</label>
          <br />
          <input
            type="password"
            className="border-2 rounded-full textSize form-input outline-blue-400"
            placeholder="Enter Your Password"
            onChange={(e) => setUserPassword(e.target.value)}
          />{" "}
          <br /> <br />
          <button
            type="submit"
            className="font-bold text-white duration-300 bg-black rounded-md logIn text-2 hover:bg-orange-600"
          >
            Login
          </button>
          <p className="forgotPass">
            <Link
              className="hover:text-orange-600 hover:underline"
              to="/forgotpassword"
            >
              <b>Forgot Password</b>
            </Link>
          </p>
          <span className="mt-6 text-1xl textColor2">
            If You Don't Have An Account&nbsp; &nbsp;
            <Link
              className="text-white-500 hover:text-orange-600 hover:underline"
              to="/signup"
            >
              <b>Signup</b>
            </Link>
          </span>
        </form>
        </div>

        {/* <br /> */}
        <div className="logimIng" >
        <img src={LoginImage} />

        </div>

      </div>

      <Footer />
    </>
  );
};
export default Login;
