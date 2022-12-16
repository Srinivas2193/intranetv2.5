import React from "react";
import "./ForgotPassword.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Molecules/Header/Header";
import forgotPasswordLogo from "./../../Images/forgotLogo.png";
import Footer from "../Footer/Footer";

function ForgotPassword() {
  const [emailVal, setEmailVal] = useState("");
  const [emailFiels, setEmailfeild] = useState(true);
  const [otpFeild, setOtpfeild] = useState(false);
  const [otpValue, setOtpvalue] = useState("");
  const [passwordFeild, setPasswordfeild] = useState(false);
  const [password, setPassword] = useState("");
  const [conPassword, setConpassword] = useState("");
  const [err, setErr] = useState(false);
  const [err2, setErr2] = useState(false);
  const navigate = useNavigate();

  const checkEmail = (e) => {
    setEmailVal(e.target.value);
  };

  const VerfyEmail = () => {
    let lsData = localStorage.getItem("userDataList");
    let parseData;
    if (lsData) {
      parseData = JSON.parse(lsData);
    } else {
      parseData = [];
    }

    for (var val of parseData) {
      if (val.email != emailVal) {
        setErr(true);
      } else {
        setErr(false);
        setEmailfeild(false);
        setOtpfeild(true);
      }
    }
  };

  const otpValueCheck = (e) => {
    setOtpvalue(e.target.value);
  };

  const otp = 123456;
  const Verfyotp = () => {
    if (otp != otpValue) {
      alert("please Enter Correct OTP");
    } else {
      setEmailfeild(false);
      setOtpfeild(false);
      setPasswordfeild(true);
    }
  };

  // password card

  const checkPassword = (e) => {
    setPassword(e.target.value);
  };

  const checkConfPassword = (e) => {
    setConpassword(e.target.value);
  };

  const SavePassword = () => {
    if (password != conPassword) {
      setErr2(true);
    } else {
      let lsData = localStorage.getItem("userDataList");
      let parseData;
      if (lsData) {
        parseData = JSON.parse(lsData);
      } else {
        parseData = [];
      }
      for (let val of parseData) {
        if (emailVal == val.email) {
          val.password = conPassword;
          setErr2(false);
          navigate("/login");
        }
      }
      localStorage.setItem("userDataList", JSON.stringify(parseData));
    }
  };

  return (
    <>
      <Header />
      {emailFiels && (
        <div className="h-[676px] max-w-[1920px] items-center flex flex-row flex-wrap justify-center bg-gradient-to-r from-orange-300 to-blue-300">
          <div>
            <form className=" h-[500px] w-[800px]  justify-center bg-gradient-to-r from-blue-300 to-orange-300 shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="formFields">
                <h1 className="text-3xl mb-16 font-bold tracking-wide">
                  Forgot Your Password ?
                </h1>

                <div className="mb-9">
                  <label
                    class="block text-gray-700 text-xl font-medium mb-2"
                    for="username"
                  >
                    please Enter Your Email
                  </label>
                  <input
                    value={emailVal}
                    onChange={checkEmail}
                    class=" mt-4 shadow appearance-none  w-[300px] p-[13px] rounded text-slate-900 text-xl"
                    id="username"
                    type="text"
                    placeholder="Enter UserName"
                  />
                  {err && (
                    <span className="text-xl">plese enter valid email</span>
                  )}
                </div>
                <div class="flex items-center justify-between">
                  <button
                    onClick={VerfyEmail}
                    class="bg-neutral-700 hover:bg-neutral-900 text-white font-bold py-4 px-5 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Verfy Email
                  </button>
                  <Link
                    to="/login"
                    class="inline-block align-baseline font-bold text-xl text-neutral-600 hover:text-neutral-800"
                  >
                    <p>Back to login</p>{" "}
                  </Link>
                </div>
                <div className="forgotLogo">
                  <img src={forgotPasswordLogo} alt="ForgotPassword Logo" />
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* OTP form */}

      {otpFeild && (
        <div className="h-[676px] max-w-[1920px] items-center flex flex-row flex-wrap justify-center bg-gradient-to-r from-orange-300 to-blue-300">
        <div>
          <form className=" h-[500px] w-[800px]  justify-center bg-gradient-to-r from-blue-300 to-orange-300 shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="formFields">
                <div className="mb-9">
                  <label
                    class="block text-gray-700 text-3xl font-bold mb-2"
                    for="otp"
                  >
                    Enter OTP
                  </label>
                  <input
                    value={otpValue}
                    onChange={otpValueCheck}
                    class=" mt-4 shadow appearance-none border rounded-lg w-[300px] p-[16px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="password"
                    placeholder="Enter Otp"
                  />
                </div>
                <div class="flex items-center justify-between">
                  <button
                    onClick={Verfyotp}
                    class="bg-neutral-700 hover:bg-neutral-900 text-white font-bold py-4 px-5 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Submit OTP
                  </button>
                </div>
                <div className="forgotLogo">
                  <img src={forgotPasswordLogo} alt="ForgotPassword Logo" />
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* password feilds */}

      {passwordFeild && (
       <div className="h-[676px] max-w-[1920px] items-center flex flex-row flex-wrap justify-center bg-gradient-to-r from-orange-300 to-blue-300">
       <div>
         <form className=" h-[500px] w-[800px]  justify-center bg-gradient-to-r from-blue-300 to-orange-300 shadow-md rounded px-8 pt-6 pb-8 mb-4">
           <div className="formFields">
                <div className="mb-9">
                  <label
                    class="block text-gray-700 text-3xl font-bold mb-2"
                    for="otp"
                  >
                    Enter password
                  </label>
                  <input
                    value={password}
                    onChange={checkPassword}
                    class=" mt-4 shadow appearance-none border rounded-lg w-[300px] p-[16px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="password"
                    placeholder="Enter Password"
                  />
                </div>

                <div className="mb-9">
                  <label
                    class="block text-gray-700 text-3xl font-bold mb-2"
                    for="otp"
                  >
                    Confirm password
                  </label>
                  <input
                    value={conPassword}
                    onChange={checkConfPassword}
                    class=" mt-4 shadow appearance-none border rounded-lg w-[300px] p-[16px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="password"
                    placeholder="Confirm Password"
                  />
                  {err2 && (
                    <span className="text-xl">
                      plese match the both password
                    </span>
                  )}
                </div>

                <div class="flex items-center justify-between">
                  <button
                    onClick={SavePassword}
                    class="bg-neutral-700 hover:bg-neutral-900 text-white text-xl w-24 ml-24 font-bold py-4 px-5 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Save
                  </button>
                </div>
                <div className="forgotLogo">
                  <img src={forgotPasswordLogo} alt="ForgotPassword Logo" />
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
      <Footer />
      
    </>
  );
}

export default ForgotPassword;
