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

            <Route path="/home/sdlc" element={<SdlcMain />} />

            <Route path="/home/sdlc/blockchain" element={<SdlcBlockchain />} />
            <Route path="/home/sdlc/blockchain/:id" element={<SDLCBlockchain />} />

            <Route path="/home/sdlc/me-ott" element={<SdlcMeOtt />} />
            <Route path="/home/sdlc/me-ott/:id" element={<OTT />} />

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
