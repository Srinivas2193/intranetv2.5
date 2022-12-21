import React from "react";
import "./App.css";

//Import Routing plugin
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";

//Importing Login Image
import Login from "./Components/Login/Login";

//Importing ForgotPassword Component
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";

//import Landing page(Home Page) component
import Home from "./Components/Pages/LandingPage/Landingpage";

//Import Signup component
import Signup from "./Components/Signup/Signup";

import Contactus from "./Components/Pages/Contactus/Contactus";
import About from "./Components/Pages/Aboutus/Aboutus";

//importing sales page
import Sales from "./Components/Pages/Sales/Sales";
import CorporateDeck from "./Components/Pages/Sales/CorporateDeck";
import SalesDomains from "./Components/Pages/Sales/SalesDomains";
import QualityAssurance from "./Components/Pages/Sales/Domains/QA/QA";
import SubQA from "./Components/Pages/Sales/Domains/QA/SubQAs";
import MandEOtt from "./Components/Pages/Sales/Domains/M&E-OTT/MandE-Ott";
import SubMandE from "./Components/Pages/Sales/Domains/M&E-OTT/SubMandE";
import SalesBlockchain from "./Components/Pages/Sales/Domains/Blockchain/Blockchain";
import SubBlockchain from "./Components/Pages/Sales/Domains/Blockchain/SubBlockchain";
import SalesIot from "./Components/Pages/Sales/Domains/OTT/SalesIot";
import SubIots from "./Components/Pages/Sales/Domains/OTT/SubIots";
import RetailsAndEcommerce from "./Components/Pages/Sales/Domains/Retails&Commerce/RetailAndEcommerce";
import SubRetailAndEcommerce from "./Components/Pages/Sales/Domains/Retails&Commerce/SubRetail";
import ProtectedRoute from "./Components/ProtectedRoutes/ProtectedRoutes";
import MainTemplate from "./Components/Maintemplate/Maintempltae";
import SDLCBlockchain from "./Components/Pages/SDLC/SubDomains/BlockchainInfo";
import OTT from "./Components/Pages/SDLC/SubDomains/OTT";
import SdlcBlockchain from "./Components/Pages/SDLC/Domains/Blockchan";
import SdlcMeOtt from "./Components/Pages/SDLC/Domains/Me-OTT";
import SdlcMain from "./Components/Pages/SDLC/Sdlc";
import LandD from "./Components/Pages/L&D/L&D";
import LandD_Domains from "./Components/Pages/L&D/Domains/Domains";
import LandD_QA from "./Components/Pages/L&D/Domains/QualityAssurance/QualityAssurance";
import LandD_QA_SubDomains from "./Components/Pages/L&D/Domains/QualityAssurance/SubDomians";
import LandD_ReactJs from "./Components/Pages/L&D/Domains/React-js/ReactJs";
import LandD_React_SubDomains from "./Components/Pages/L&D/Domains/React-js/SubDomains";
import LandD_NodeJs from "./Components/Pages/L&D/Domains/Nodejs/NodeJs";
import LandD_Node_SubDomains from "./Components/Pages/L&D/Domains/Nodejs/SubDomains";
import LandD_Net_Angular from "./Components/Pages/L&D/Domains/.net_Angular/.Net_Angular";
import LandD_Net_Angular_SubDomains from "./Components/Pages/L&D/Domains/.net_Angular/SubDomains";
import LandD_Java_Sb from "./Components/Pages/L&D/Domains/Java_SB/Java_Sb";
import LandD_Java_Sb_Subdomains from "./Components/Pages/L&D/Domains/Java_SB/SubDomains";
import Behavioural from "./Components/Pages/Behavuioral/Behavioural";
import Behavioural_Communications from "./Components/Pages/Behavuioral/Comminication/Behavioural";
import Basic_Communication from "./Components/Pages/Behavuioral/Comminication/BasicCommunication/BasicCommunication";
import BasicCommunication_SubPages from "./Components/Pages/Behavuioral/Comminication/BasicCommunication/SubPages";
import TimeManagement from "./Components/Pages/Behavuioral/TimeManagement/TimeManagement";
import TimeManagement_SubPages from "./Components/Pages/Behavuioral/TimeManagement/SubPages";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<MainTemplate />}>
            <Route path="/home1" element={<Home />} />
          

            <Route path="sales" element={<Sales />} />

            <Route path="sales/Corporate-deck" element={<CorporateDeck />} />
            <Route path="sales/domains" element={<SalesDomains />} />

            <Route path="sales/domains/qa" element={<QualityAssurance />} />
            <Route path="sales/domains/qa/:id" element={<SubQA />} />

            <Route path="sales/domains/m&e-ott" element={<MandEOtt />} />
            <Route path="sales/domains/m&e-ott/:id" element={<SubMandE />} />

            <Route path="sales/domains/blockchain" element={<SalesBlockchain />} />
            <Route path="sales/domains/blockchain/:id" element={<SubBlockchain />} />

            <Route path="sales/domains/iot" element={<SalesIot />} />
            <Route path="sales/domains/iot/:id" element={<SubIots />} />

            <Route
              path="/sales/domains/retail-ecommerce" element={<RetailsAndEcommerce />} />
            <Route
              path="/sales/domains/retail-ecommerce/:id" element={<SubRetailAndEcommerce />}/>

            <Route path="sdlc" element={<SdlcMain />} />

            <Route path="sdlc/blockchain" element={<SdlcBlockchain />} />
            <Route path="sdlc/blockchain/:id" element={<SDLCBlockchain />} />

            <Route path="sdlc/me-ott" element={<SdlcMeOtt />} />
            <Route path="sdlc/me-ott/:id" element={<OTT />} />

            <Route path="l&d" element={<LandD />} />
            <Route path="l&d/domains" element={<LandD_Domains/>} />
            <Route path="l&d/domains/qa" element={<LandD_QA/>} />
            <Route path="l&d/domains/qa/:id" element={<LandD_QA_SubDomains/>} />

            <Route path="l&d/domains/react-js" element={<LandD_ReactJs/>} />
            <Route path="l&d/domains/react-js/:id" element={<LandD_React_SubDomains/>} />

            <Route path="l&d/domains/node-js" element={<LandD_NodeJs/>} />
            <Route path="l&d/domains/node-js/:id" element={<LandD_Node_SubDomains/>} />


            <Route path="l&d/domains/.net-angular" element={<LandD_Net_Angular/>} />
            <Route path="l&d/domains/.net-angular/:id" element={<LandD_Net_Angular_SubDomains/>} />


            <Route path="l&d/domains/java-sb-ms" element={<LandD_Java_Sb/>} />
            <Route path="l&d/domains/java-sb-ms/:id" element={<LandD_Java_Sb_Subdomains/>} />

            <Route path="l&d/behavioral" element={<Behavioural/>} />
            <Route path="l&d/behavioral/communication-skills" element={<Behavioural_Communications/>} />
            <Route path="l&d/behavioral/communication/basic-communication" element={<Basic_Communication/>} />
            <Route path="l&d/behavioral/communication/basic-communication/:id" element={<BasicCommunication_SubPages/>} />


            <Route path="l&d/behavioral/time-management" element={<TimeManagement/>} />
            <Route path="l&d/behavioral/time-management/:id" element={<TimeManagement_SubPages/>} />



            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contactus />} />
          </Route>
        </Route>

        <Route path="/login" element={<Login />} />

        {/* <Route path='/' element={<Login  />} /> */}

        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/signup" element={<Signup />} />
      </>
    )
  );
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
