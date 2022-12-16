import React, { useState } from "react";
import pdf from '../../../assets/Docs/ideyaLabs-Corporate-iLTeam.pdf'
function CorporateDeck(){
  const[visible, setVisible]=useState(true)
  const EnabalePdf=()=>{
      setVisible(false)
  }
    return(
      <>
      {visible && <div className="w-[1570px] h-[100%] flex flex-row flex-wrap bg-slate-100">
      <div className="text-3xl w-[inherit] text-white flex justify-center items-center">
        <div className="p-4 bg-black rounded-xl">
          <button onClick={EnabalePdf}>CorporateDeck</button>
        </div>
      </div>
    </div>}

    {visible === false && 
    <div>
       <object data={pdf} type="application/pdf" style={{ height: "730px", width: "1570px" }} >
                <p>Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a></p>
            </object>
            </div>
}
    </>
    )
}
export default CorporateDeck;