import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function OTT() {
  const { id } = useParams();
  const data = [
    {
      title: "iStream - Hadara",
      id: "istream",
      url: "https://ideyalabs.atlassian.net/wiki/spaces/IHC/overview",
    },
    {
      title: "iStream - Lightening",
      id: "istream",
      url: "https://ideyalabs.atlassian.net/wiki/spaces/ISL/overview",
    },
    {
      title: "iStream - RN",
      id: "istream",
      url: "https://ideyalabs.atlassian.net/wiki/spaces/IS/overview",
    },
    {
      title: "Comcast",
      id: "comcast",
      url: "https://ideyalabs.atlassian.net/wiki/spaces/COM/overview",
    },
    {
      title: "WISH",
      id: "wish",
      url: "https://ideyalabs.atlassian.net/wiki/spaces/WISH/overview",
    },
  ];

  const [filterData, setFilterData] = useState([]);
  const list = [];
  useEffect(() => {
    for (var item of data) {
      if (item.id == id) {
        list.push(item);
      }
      setFilterData([...list]);
    }
  }, [id]);
  return (
    <div className="w-[1570px] max-w-[-webkit-fill-available] h-[100%] flex flex-row flex-wrap justify-center items-center bg-slate-100">
      <div className="text-3xl text-white">
        {filterData.map((val, key) => (
          <div className="p-4 m-9 bg-black rounded-xl text-center">
            <a href={val.url} target="_blank">
              {val.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OTT;
