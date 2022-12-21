import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function BasicCommunication_SubPages() {
  const [visible, setVisible] = useState(true);
  const [filterData, setFilterData] = useState("");

  const { id } = useParams();
  console.log(id);
  const data = [
    { title: "Handbook", id: "handbook", pdf: "pdf1" },
    { title: "PPT", id: "ppt", pdf: "pdf2" },
    { title: "Assessments", id: "assessments", url: "#" },
    { title: "Activity", id: "activity", url: "#" },
  ];
  useEffect(() => {
    console.log("useEffect");
    data.filter((item) => {
      if (item.id === id) {
        setFilterData(item);
      }
    });
    setVisible(true);
  }, [id]);
  const EnablePdf = () => {
    setVisible(false);
  };
  return (
    <>
      <div className="w-[1570px] max-w-[-webkit-fill-available] h-[100%] flex flex-row flex-wrap justify-center items-center bg-slate-100 ">
        <div className="text-4xl text-white">
          <div className="p-4 bg-black rounded-xl hover-2">
            <a href={filterData.url}>{filterData.title}</a>
          </div>
        </div>
      </div>
    </>
  );
}
export default BasicCommunication_SubPages;
