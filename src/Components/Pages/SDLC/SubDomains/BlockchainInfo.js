import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function SDLCBlockchain() {
  const { id } = useParams();
  const data = [
    {
      title: "coyni",
      id: "coyni",
      url: "https://ideyalabs.atlassian.net/wiki/spaces/COYN/overview",
    },
    {
      title: "ChargeSavvy",
      id: "chargeSavvy",
      url: "https://ideyalabs.atlassian.net/wiki/spaces/CS/overview",
    },
    {
      title: "TEU",
      id: "teu",
      url: "https://ideyalabs.atlassian.net/wiki/spaces/TEU/overview",
    },
    {
      title: "TENNA",
      id: "tenna",
      url: "https://ideyalabs.atlassian.net/wiki/spaces/TEN/overview",
    },
  ];

  const [filterData, setFilterData] = useState("");
  useEffect(() => {
    data.filter((item) => {
      if (item.id == id) {
        setFilterData(item);
      }
    });
  }, [id]);
  return (
    <div className="w-[1570px] h-[100%] flex flex-row flex-wrap bg-slate-100">
      <div className="text-3xl w-[inherit] text-white flex justify-center items-center">
        <div className="p-4 bg-black rounded-xl">
          <a href={filterData.url} target="_blank">
            {filterData.title}
          </a>
        </div>
      </div>
    </div>
  );
}

export default SDLCBlockchain;
