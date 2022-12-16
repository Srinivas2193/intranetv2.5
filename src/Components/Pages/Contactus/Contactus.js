import React from "react";
import { useState } from "react";
import "./Contactus.css";
import { useNavigate } from "react-router-dom";

import contactme from "./../../../Images/Contactus-Img/Contact-Us.png";

export default function Contact(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  let navigate = useNavigate();

  const onformSubmit = (e) => {
    e.preventDefault();

    // document.getElementById("name").oninvalid = (e)=>{
    //   e.target.setCustomValidity("Incorrect name, please enter a valid name!");
    // }

    // alert("Your message has been submitted succesfully !");
    navigate("/login");
    const data = {
      name: name,
      email: email,
      mobile: mobile,
      address: address,
      message: message,
      uniqueId:
        Math.round(Math.random() * 100) + "_" + Math.round(Math.random() * 100),
    };

    let lsData = localStorage.getItem("contactUsDataList");
    let parseData;
    if (lsData) {
      parseData = JSON.parse(lsData);
    } else {
      parseData = [];
    }
    localStorage.setItem(
      "contactUsDataList",
      JSON.stringify([data, ...parseData])
    );
    let formTag = document.forms[0];
    formTag.name.value = "";
    formTag.email.value = "";
    formTag.mobile.value = "";
    formTag.message.value = "";
  };
  return (
    <>
      <div className="w-[1570px] max-w-[-webkit-fill-available] h-[100%] bg-slate-100 flex flex-row justify-center items-center">
        <div className="m-[70px]">
        <img src={contactme} />
        </div>
        <div className="m-[40px] ml-[40px]">
          <h2 className="text-3xl font-bold ml-20 text-black  hover:text-orange-500 my-3">
            Contact Us
          </h2>
          <br />

          <form onSubmit={onformSubmit}>
            <label className="block text-xl" htmlFor="name">
              Name
            </label>
            <input
              pattern="[A-Za-z]{3,10}"
              id="name"
              name="name"
              className="form-input border-2 feilds px-24 py-3 "
              type="text"
              placeholder="enter your name"
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <label className="block text-xl mt-9" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              className="form-input border-2  feilds px-24 py-3 "
              type="email"
              placeholder="enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            <label className="block text-xl mt-9" htmlFor="mobile">
              Mobile
            </label>
            <input
              id="mobile"
              name="mobile"
              className="form-input border-2 feilds  px-24 py-3 "
              type="number"
              placeholder="enter your mobile number"
              onChange={(e) => setMobile(e.target.value)}
              required
            />
           <br />
            <label className="block text-xl mt-9" htmlFor="message">
              {" "}
              Message{" "}
            </label>
            <textarea
              id="message"
              name="message"
              style={{ textIndent: "10px", overflowY: "scroll" }}
              className=" px-24 form-input feilds border-2  border "
              type="text"
              placeholder="enter your message"
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <br />
            <button className=" bg-blue-600 rounded-md px-4 py-2 text-2xl mb-5 mt-6 text-white font-bold hover:bg-black ">
              {" "}
              Contact Us{" "}
            </button>
            <br />
          </form>
        </div>
      </div>
    </>
  );
}
