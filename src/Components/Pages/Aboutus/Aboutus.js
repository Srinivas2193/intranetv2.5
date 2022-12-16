import React from "react";
import aboutimg from "../../../Images/Aboutus/About.jpg";
import { BsEye } from "react-icons/bs";
import { SiTarget } from "react-icons/si";

const About = () => {
  return (
    <div className="flex flex-col justify-center px-14 ">
      <marquee className="flex flex-row items-center justify-center">
        <h1 className="flex flex-row justify-center text-2xl   font-bold text-orange-500">
          An Organization's capacity to Learn, and Translate that gaining
          knowledge of into Action Rapidly
        </h1>
      </marquee>

      <h1 className="flex flex-row justify-start text-3xl  font-bold text-orange-500 ml-5">
        <span className="text-blue-500">About</span>&nbsp;ideyaLabs
      </h1>
      <div className="flex flex-row items-center gap-36">
        <p className="ml-5 text-2xl w-[800px] text-justify  ">
          We are a digital science enterprise imparting End-to-End product
          improvement services. We leverage the strength of ride design, brand
          new engineering and cloud to construct disruptive net and cellular
          apps enabling digital transformation for business. We force product
          engineering and digital transformation with Agile methodologies as the
          backbone.
        </p>
        <img
          src={aboutimg}
          alt="aboutimg"
          className="duration-300 ease-in border border-gray-200 shadow-xl rounded-xl hover:scale-110 dark:bg-gray-800 dark:border-gray-700 w-[500px] h-[300px]"
        />
      </div>
      <div className="mt-4 mr-24 text-3xl font-bold text-center text-blue-500">
        <span className=" text-orange-500">ideyaLabs</span> <span className="mr-4 text-3xl font-bold text-center text-blue-500"> - Vision and Mission</span>
      </div>

      <div className="flex flex-row justify-center mt-7 gap-36">
        <div className="w-[1000px] h-[250px] group flex flex-col justify-center items-center p-6 gap-1 max-w-sm bg-white rounded-xl hover:scale-110 ease-in duration-300 border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className="text-4xl font-semibold text-orange-500 ">
            <BsEye />
          </div>
          <h1 className="text-4xl text-blue-500 ">Vision</h1>

          <hr className="flex-grow w-[350px] border-solid font-bold border-blue-500" />
          <p className="text-justify  ">
            Harness the power of people, technology, ideas, and solutions to
            foster the growth – of our clients, our people, our communities that
            we all live in
          </p>
        </div>
        <div className="w-[1000px] h-[250px] group flex flex-col justify-center items-center p-6 gap-3 max-w-sm bg-white rounded-xl hover:scale-110 ease-in duration-300 border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className="text-4xl font-semibold text-orange-500 ">
            <SiTarget />
          </div>
          <h1 className="text-4xl text-blue-500 ">Mission</h1>

          <hr className="flex-grow w-[350px] border-solid font-bold border-blue-500" />
          <p className="text-justify  ">
            Our mission is to develop long-term trusting relationships with our
            clients, our vendors, our people and communities through inspired
            technological solutions and products
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default About;
