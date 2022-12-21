import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function LandD_Java_Sb_Subdomains() {
  const { id } = useParams();
  const data = [
    { title: "Training Topics", url: "#", id:"training-topics"},
    { title: "Day Wise Topics", url: "#",id:"day-wise-topics" },
    { title: "Slide Deck", url: "#",id:"slide-deck" },
    { title: "Practice exercises", url: "#",id:"practice-exercises" },
    { title: "Projects", url: "#",id:"projects" },

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
export default LandD_Java_Sb_Subdomains;
