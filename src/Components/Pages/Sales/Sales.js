import React from "react";
import image from './../../../Images/sales.jpg'

function Sales(){


    return(
        <>
    <div >
            <img src={image}  alt="sales image" className="w-[1570px] max-w-[-webkit-fill-available] h-[730px] flex flex-row flex-wrap justify-center items-center bg-slate-100" />
        </div>
        </>
    )
}

export default Sales;