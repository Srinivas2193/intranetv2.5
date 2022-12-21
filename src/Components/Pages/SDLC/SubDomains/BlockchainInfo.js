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

export default SDLCBlockchain;
