import React from "react";  
import Logo from './../../../Images/ideyalabsLogo.png'
import {Link} from 'react-router-dom'

function Header(){

    return(
        <>
        <div className="flex flex-row justify-between bg-sky-300 drop-shadow-xl">
      <div>
        <h1
          className="p-2 text-5xl font-bold text-gray-500"
          style={{ fontStyle: "font-family: 'Lato', sans-serif;" }}
        >
          <Link to='/home'>
          <span style={{ color: "#eb7524" }}>ideyaLabs </span>
          <span style={{ color: "#285d93" }}>Intranet</span>
          </Link>
        </h1>
      </div>
      <div>
        <img src={Logo} alt="logo" className="h-20 p-2 " />
      </div>
    </div>
        
        </>
    )
}

export default Header