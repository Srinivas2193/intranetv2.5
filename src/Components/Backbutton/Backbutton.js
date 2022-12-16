import React from "react";
import {useNavigate } from 'react-router-dom';
// import { AiOutlineDoubleLeft } from 'react-icons/ai';
import {FaAngleDoubleLeft} from 'react-icons/fa'

function Backbutton (){
    const navigate = useNavigate();
    return(
        <>
                <button onClick={() => navigate(-1)} className="p-4 mt-4 ml-9 "><FaAngleDoubleLeft className="text-4xl text-blue-800 hover:text-orange-500"/></button>
        </>
    )
}
export default Backbutton;