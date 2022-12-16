import { useFormik } from "formik";
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "../../App.css";
import Footer from "../Footer/Footer";
import Header from "../Molecules/Header/Header";
//import "./App.css";

//style={formik.values.firstname === "" ? { border: "1px solid red" } : null }
// cnf password confirmation {formik.errors.cnfpassword ? <div className='text-1xl text-red-600'>{formik.errors.cnfpassword}</div> : null}
export default function Signup(props) {
  const [pass, setPass] = useState(false);
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      password: "",
      cnfpassword: "",
    },
    onSubmit: (values) => {
      values.preventDefault();
      formik.values("");
    },
    validate: (values) => {
      let errors = {};

      if (!values.firstname) {
        errors.firstname = "Please enter firstname";
      } else if (!values.firstname.match(/^[a-zA-Z]+$/)) {
        errors.firstname = "Name must be in alphabets only";
      }

      if (!values.lastname) {
        errors.lastname = "Please enter lastname";
      } else if (!values.lastname.match(/^[a-zA-Z]+$/)) {
        errors.lastname = "Name must be in alphabets only";
      }
      if (!values.email) {
        errors.email = "Please enter email";
      } else if (
        !values.email.match(
          /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z])+\.)+([a-zA-Z]{2,4})+$/
        )
      ) {
        errors.email = "email should be example@gmail.com format only";
      }
      if (!values.mobile) {
        errors.mobile = "Please enter mobile";
      }
      // else if(!values.mobile.match(/^(?=.*?[0-9]).{10,}$/))
      // {
      //     errors.mobile='please enter numbers(0-9)'
      // }
      if (!values.password) {
        errors.password = "Please enter password";
        setPass(false);
      } else if (
        !values.password.match(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
        )
      ) {
        setPass(false);
        errors.password =
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character";
      } else {
        setPass(true);
      }
      if (!values.cnfpassword) {
        errors.cnfpassword = "Please Re-enter password";
      } else if (values.password === values.cnfpassword) {
        errors.cnfpassword = "password Matched";
      } else {
        errors.cnfpassword = "password and confirm password should be same";
      }
      return errors;
    },
  });
  let data = {
    fName: formik.values.firstname,
    Lname: formik.values.lastname,
    email: formik.values.email,
    mobile: formik.values.mobile,
    password: formik.values.password,
    uniqueId:
      Math.round(Math.random() * 100) + "_" + Math.round(Math.random() * 100),
    loginStatus: false,
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      formik.values.firstname &&
      formik.values.lastname &&
      formik.values.email &&
      formik.values.password &&
      formik.values.cnfpassword &&
      formik.values.password === formik.values.cnfpassword &&
      pass
    ) {
      let lsData = localStorage.getItem("userDataList");
      let parseData;
      if (lsData) {
        parseData = JSON.parse(lsData);
      } else {
        parseData = [];
      }
      localStorage.setItem(
        "userDataList",
        JSON.stringify([data, ...parseData])
      );

      let formTags = document.forms[0];
      formTags.firstname.value = "";
      formTags.lastname.value = "";
      formTags.email.value = "";
      formTags.mobile.value = "";
      formTags.password.value = "";
      formTags.cnfpassword.value = "";

      formik.handleSubmit();

      navigate("/login");
    } else {
      alert("please fill out the fields");
    }
  };

  return (
    <>
      <Header />
      <div className="h-[730px] min-w-[800px] pt-24 p-24 bg-gradient-to-r from-orange-300 to-blue-300 max-w-[1920px]">
        <form autoComplete="off" onSubmit={onSubmit} className="mt-16">
          <div className="columns-2 gap-28">
            <label className="block text-xl font-bold">First name</label>
            <br />
            <input
              type="text"
              pattern="[A-Za-z]{3,20}"
              className="form-input  px-28 py-3 border-2 rounded-full outline-blue-400"
              placeholder="enter your firstname"
              values={formik.values.firstname}
              onChange={formik.handleChange}
              name="firstname"
              id="firstname"
            />{" "}
            <br />
            <span>
              {formik.errors.firstname ? (
                <div className="text-1xl text-red-600">
                  {formik.errors.firstname}
                </div>
              ) : null}
            </span>
            <br />
            <label className="text-xl font-bold">Last name</label>
            <br />
            <br />
            <input
              type="text"
              pattern="[A-Za-z]{3,20}"
              className="form-input  px-28 py-3 border-2 rounded-full outline-blue-400"
              placeholder="enter your lastname"
              values={formik.values.lastname}
              onChange={formik.handleChange}
              name="lastname"
              id="lastname"
            />
            <br />
            <span>
              {formik.errors.lastname ? (
                <div className="text-1xl text-red-600">
                  {formik.errors.lastname}
                </div>
              ) : null}
            </span>
          </div>
          <br />
          <div className="columns-2 gap-28">
            <label className="text-xl font-bold block">Email</label>
            <br />
            <input
              type="email"
              className="form-input  px-28 py-3 border-2 rounded-full outline-blue-400"
              placeholder="enter your email"
              values={formik.values.email}
              onChange={formik.handleChange}
              name="email"
              id="email"
            />{" "}
            <br />
            <span>
              {formik.errors.email ? (
                <div className="text-1xl text-red-600">
                  {formik.errors.email}
                </div>
              ) : null}
            </span>
            <br />
            <label className="text-xl font-bold">Mobile</label>
            <br />
            <br />
            <input
              type="number"
              className="form-input  px-28 py-3 border-2 rounded-full outline-blue-400"
              placeholder="enter mobile number"
              values={formik.values.mobile}
              onChange={formik.handleChange}
              name="mobile"
              id="mobile"
            />{" "}
            <br />
            <span>
              {formik.errors.mobile ? (
                <div className="text-1xl text-red-600">
                  {formik.errors.mobile}
                </div>
              ) : null}
            </span>
          </div>
          <br />
          <div className="columns-2 gap-28">
            <label className="block text-xl font-bold">Password</label>
            <br />
            <input
              type="password"
              className="form-input  px-28 py-3 border-2 rounded-full outline-blue-400"
              placeholder="enter your password"
              values={formik.values.password}
              onChange={formik.handleChange}
              name="password"
              id="password"
            />{" "}
            <br />
            <span>
              {formik.errors.password ? (
                <div className="text-1xl text-red-600">
                  {formik.errors.password}
                </div>
              ) : null}
            </span>
            <br />
            <label className="text-xl font-bold">Confirm Password</label>
            <br />
            <br />
            <input
              type="password"
              className="form-input  px-28 py-3 border-2 rounded-full outline-blue-400"
              placeholder="Re-enter your password "
              values={formik.values.cnfpassword}
              onChange={formik.handleChange}
              name="cnfpassword"
              id="cnfpassword"
            />{" "}
            <br />
            {/* <span> {(formik.values.password === formik.values.cnfpassword) ? <div className='text-1xl text-orange-500'>password and confirm password must be same</div> : <div className='text-1xl text-green-500'>Matched</div> }</span> */}
            <span>
              {formik.errors.cnfpassword ? (
                <div
                  style={
                    formik.values.cnfpassword
                      ? { color: "green" }
                      : { color: "red" }
                  }
                >
                  {" "}
                  &nbsp;{formik.errors.cnfpassword}
                </div>
              ) : null}
            </span>
          </div>
          
          <br />
          <br />
          <div className="flex flex-row flex-wrap justify-center items-center">
          <button
            type="submit"
            className=" bg-blue-600 hover:bg-black rounded-md px-4 py-2 text-2xl mb-5 text-white font-bold hover:ease-in duration-300"
            style={{ marginLeft: "100px" }}
          >
            SignUp
          </button>
          <br />
          <p className="text-2xl ml-[80px] mb-5">
            If You Already Have An Account{" "}
            <Link
              className="text-blue-800 hover:text-black font-bold ml-3"
              to="/login"
            >
              Login
            </Link>
          </p>
          </div>
        </form>
        
      </div>
      <Footer />
    </>
  );
}
