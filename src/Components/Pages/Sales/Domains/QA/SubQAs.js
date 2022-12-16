import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SubQA() {
  const { id } = useParams();
  const data = [
    { title: "Manual", url: "#" },
    { title: "Automation", url: "#" },
    { title: "Performance", url: "#" },
    { title: "Security", url: "#" },
  ];
  const [filterData, setFilterData] = useState("");
  useEffect(() => {
    data.filter((item) => {
      if (item.title === id) {
        setFilterData(item);
      }
    });
  }, [id]);
  return (
    <div className="w-[1570px] max-w-[-webkit-fill-available] h-[100%] flex flex-row flex-wrap justify-center items-center bg-slate-100">
      <div className="text-3xl text-white">
        <div className="p-4 bg-black rounded-xl">
          <a href={filterData.url} target="self">
            {filterData.title}
          </a>
        </div>
      </div>
    </div>
  );
}
export default SubQA;
