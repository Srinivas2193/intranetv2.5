import React, { useState } from "react";
import pdf from '../../../assets/Docs/ideyaLabs-Corporate-iLTeam.pdf'
function CorporateDeck(){
  const[visible, setVisible]=useState(true)
  const EnabalePdf=()=>{
      setVisible(false)
  }
    return(
      <>
      {visible && <div className="w-[1570px] max-w-[-webkit-fill-available] h-[100%] flex flex-row flex-wrap justify-center items-center bg-slate-100">
      <div className="text-3xl text-white">
        <div className="p-4 bg-black rounded-xl">
          <button onClick={EnabalePdf}>CorporateDeck</button>
        </div>
      </div>
    </div>}

    {visible === false && 
    <div>
        <object data={pdf} type="application/pdf" className="w-[1570px] max-w-[-webkit-fill-available] h-[730px] " >
        </object>
    </div>
}
    </>
    )
  }
export default CorporateDeck;