import React from "react";
//import Cards from "./Cards";
import "./Landingpage.css";
import { useState } from "react";
import Carosal from "../../Molecules/Carosals/Carosal";

import homeImg from './../../../Images/Aboutus/home1.png'
import ReqAnalysis from './../../../Images/landingPageImg/ReqaAnalysis6.jpg'
import mindmap from './../../../Images/landingPageImg/mindmap.png'
import interLocking from './../../../Images/landingPageImg/Interlocking1.png'
import flowChart from './../../../Images/landingPageImg/flowChart1.png'
import ReqTraceability from './../../../Images/landingPageImg/ReqTraceability.png'
import testDesign from './../../../Images/landingPageImg/testDesign1.png'
import buildDeploy from './../../../Images/landingPageImg/buildDeploy.png'
import functionalAutomation from './../../../Images/landingPageImg/functionalAutomation2.png'
import perfomanceTesting from './../../../Images/landingPageImg/perfomanceTesting2.png'
import securityTesting from './../../../Images/landingPageImg/securityTesting1.png'
import testClosure from './../../../Images/landingPageImg/testClosure.jpg'
import apiTesting from './../../../Images/landingPageImg/apiTesting1.jpeg'

import {useNavigate } from "react-router-dom";
import ScrollArea from 'react-scrollbar';


//import bank from "./images/QA-Images/Banking.png"
export const Home = (props) => {
 

  //props.enabling(true)

  const images = [
    { img: ReqAnalysis, url: "/home/requirementAnalysis", title: "Requirement Analysis" },
    { img: mindmap, url: "/home/mindmap", title: "Mind Maps" },
    { img: interLocking, url: "/home/interlocking", title: "Interlocking Diagrams" },
    { img: flowChart, url: "/home/activity-diagram", title: "Activity Diagram" },
    { img: ReqTraceability, url: "/home/requestTracaebility", title: "Requirement Traceability Matrix" },
    { img: testDesign, url: "/home/testDesign", title: "Test Design" },
    { img: buildDeploy, url: "/home/buildDeployeeProcess", title: "Build and Deployment Process" },
    { img: apiTesting, url: "/home/apitesting", title: "API Testing" },
    { img: functionalAutomation, url: "/home/functionaltesting", title: "Functional Automation Testing" },
    { img: perfomanceTesting, url: "/home/perfomancetesting", title: "Perfomance Testing" },
    { img: securityTesting, url: "/home/securitytesting", title: "Security Testing" },
    //{ img: testClosure, url: "/testClosure", title: "Test Closure" },
   
  ]

  const navigate=useNavigate();
  



  return (
    <>
<div className="px-[2px] bg-gradient-to-r from-slate-300 via-orange-300 to-blue-300" >
<ScrollArea
            speed={0.8}
            className="min-w-[768px] max-w-[-webkit-fill-available] p-9 h-[730px]"
            contentClassName="content"
            horizontal={false}
            >
          <div className="flex flex-row justify-center">
         <Carosal />

          </div>
         <div class="flex flex-row rounded  flex-wrap gap-1   md:justify-center lg:justify-center " >
        {images.map((val, i) => (
          <div class="max-w-sm rounded-[15px] drop-shadow-xl hover:scale-110 ease-in duration-300 cardShadowBanking   overflow-hidden shadow-lg m-9 mt-[18px]">
            <img src={val.img} alt={val.title} className="w-[295px] h-[200px]" /> 
            <div class="p-4 pt-4 flex flex-row justify-center bg-blue-500 " >
              <div className="text-center" ><p class="font-bold text-xl text-slate-100 hover:text-slate-100 w-[264px] h-[38px] ">{val.title}</p></div>
            </div>
          </div>

        ))}
      </div>
      </ScrollArea>
    </div>
    </>
  );
};
export default Home;


