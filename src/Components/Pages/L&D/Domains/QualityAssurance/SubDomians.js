import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function LandD_QA_SubDomains() {
  const { id } = useParams();
  const data = [
    { title: "Manual", url: "#", id:"manual"},
    { title: "Automation", url: "#",id:"automation" },
    { title: "Performance", url: "#",id:"performance" },
    { title: "Security", url: "#",id:"security" },
    { title: "Automation Framework", url: "#",id:"automation-framework" },

  ];
  const [filterData, setFilterData] = useState("");
  useEffect(() => {
    data.filter((item) => {
      if (item.id === id) {
        setFilterData(item);
      }
    });
  }, [id]);
  return (
    <div className="w-[1570px] max-w-[-webkit-fill-available] h-[100%] flex flex-row flex-wrap justify-center items-center bg-slate-100 ">
    <div className="text-4xl text-white">
      <div className="p-4 bg-black rounded-xl hover-2">
        <a href={filterData.url}>
          {filterData.title}
        </a>
      </div>
    </div>
  </div>
  );
}
export default LandD_QA_SubDomains;
