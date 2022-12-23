import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import pdf1 from '../../../../../assets/Docs/INTRANET- coyni Case Study v01.pdf'
import pdf2 from '../../../../../assets/Docs/iBaaS Presentation _Case Study 06122022.pdf'

function SubBlockchain() {
  const[visible, setVisible]=useState(true)
  const [filterData, setFilterData] = useState("");
  const { id } = useParams();
  const data = [
    {
      title: "coyni- WEB- Admin, Customer, Merchant, Checkout",
      id: "coyni-web-admin-customer-merchant-checkout",
      url: "#",
      pdf:pdf1
    },
    {
      title: "coyni-  Mobile - Customer, Merchant",
      id: "coyni-mobile-customer-merchant",
      url: "#",
    },
    {
      title: "iBaaS - WEB- Admin, Customer, Merchant, Checkout",
      id: "ibaas-web-admin-customer-merchant-checkout",
      url: "#",
      pdf:pdf2
    },
    {
      title: "iBaaS-  Mobile - Customer, Merchant",
      id: "ibaas-mobile-customer-merchant",
      url: "#",
    },
    { title: "TEU and ChargeSavvy", id: "teu-chargesavvy", url: "#" },
  ];
  useEffect(() => {
    data.filter((item) => {
      if (item.id === id) {
        setFilterData(item);
      }
    });
    setVisible(true)
  }, [id]);
  const EnablePdf=()=>{
    setVisible(false)
}
return (
  <>
    {visible &&  <div className="w-[1570px] max-w-[-webkit-fill-available] h-[100%] flex flex-row flex-wrap justify-center items-center bg-slate-100 ">
      <div className="text-3xl text-white">
        <div className="p-4 bg-black rounded-xl hover-2">
          <button  onClick={EnablePdf}>
            {filterData.title}
          </button>
        </div>
      </div>
    </div>}

    {visible === false && <>
      { filterData.pdf ? <div className="">
         <object data={filterData.pdf} type="application/pdf" className="w-[1570px] max-w-[-webkit-fill-available] h-[730px] " >
          </object>
        </div>: 
        <div className="w-[1570px] max-w-[-webkit-fill-available] h-[100%] flex flex-row flex-wrap justify-center items-center bg-slate-100 ">
        <div className="text-3xl text-white">
          <div className="p-4 bg-black rounded-xl hover-2">
          <button  >
            {filterData.title}
          </button>
          </div>
        </div>
      </div>

        }
        </>
        }
        
    </>
);

   //return (
  //   <div className="w-[1570px] h-[100%] flex flex-row flex-wrap bg-slate-100">
  //     <div className="text-3xl w-[inherit] text-white flex justify-center items-center">
  //       <div className="p-4 bg-black rounded-xl">
  //         <a href={filterData.url} target="self">
  //           {filterData.title}
  //         </a>
  //       </div>
  //     </div>
  //   </div>
  // );
}
export default SubBlockchain;
