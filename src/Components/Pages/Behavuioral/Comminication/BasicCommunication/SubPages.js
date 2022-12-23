import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import handbook from '../../../../../assets/Docs/Communication/Communication Skills Handbook.pdf'

function BasicCommunication_SubPages() {
  const [visible, setVisible] = useState(true);
  const [filterData, setFilterData] = useState([]);
  const { id } = useParams();
  const navigate=useNavigate();

  console.log(id);

  const Assessments = [
    {title: "Synonyms and Antonyms",id: "assessments-synonyms-and-antonyms"},
    {title: "Commonly Confused Words",id: "assessments-commonly-confused-words"},
    {title: "Active Voice and Passive Voice",id: "assessments-active-voice-and-passive-voice"},
    {title: "Parts of Speech",id: "assessments-parts-of-speech"},
    {title: "Articles",id: "assessments-articles"},
    {title: "Indiansims",id: "assessments-indiansims"},
    {title: "Tenses",id: "assessments-tenses"},
    {title: "Present Tense",id: "assessments-present-tense"},
    {title: "Past Tense",id: "assessments-past-tense"},
    {title: "Subject Verb Agreement",id: "assessments-subject-verb-agreement"},
    {title: "Email Writing",id: "assessments-email-writing"} 
  ];

  const data = [
    { title: "Handbook", id: "handbook", pdf: handbook,children:false},
    { title: "PPT", id: "ppt", pdf: "pdf2",children:true },
    { title: "Assessments", id: "assessments", pdf: Assessments,children:true },
    { title: "Activity", id: "activity", url: "#",children:true },
  ];
  const list = [];
  console.log(list)
  useEffect(() => {
    for (var item of data) {
      if (item.id == id) {
        list.push(item);
      }
      setFilterData([...list]);
    }
  }, [id]);
  console.log(filterData,visible)

  const EnablePdf = (child) => {
    console.log(child)
    if(child.children){
      navigate(`/l&d/behavioral/communication/basic-communications/${child.id}`)
    }
    else{
      navigate(`/l&d/behavioral/communication/basic-communications/${child.id}`)
    }
  };

  return (
    <>
    <div className="w-[1570px] max-w-[-webkit-fill-available] h-[100%] flex flex-row flex-wrap justify-center items-center bg-slate-100">
      <div className="text-3xl text-white flex flex-row flex-wrap justify-center items-center">
        {filterData.map((val, key) => {
          return(
            <>
            {val.children ?
            val.pdf.map((child,key2)=>{
              return(
                <div className="p-4 m-9  hover:bg-orange-400 hover:text-white rounded-xl text-center hover-2">
                   <button onClick={() => EnablePdf(child)}>
                     {child.title}
                    </button>
                 </div>
                   )})
            :
           <>
              {filterData.map((val, key) => (
                <div className="p-4 m-9 bg-black rounded-xl text-center hover-2">
                  <button  onClick={() => EnablePdf(val)}>
                    {val.title}
                  </button>
                </div>
              ))}
          </>
          }
           </> 
      ) })}
      </div>
    </div>

    </>
  );
}
export default BasicCommunication_SubPages;
