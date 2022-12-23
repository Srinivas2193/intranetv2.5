import React,{useEffect, useState} from "react";

import { useParams } from "react-router-dom";
import handbook from '../../../../../assets/Docs/Communication/Communication Skills Handbook.pdf'

import pdf1 from '../../../../../assets/Docs/Communication/Assessments/Assessment 1 - Synonyms and Antonyms.pdf'
import pdf2 from '../../../../../assets/Docs/Communication/Assessments/Assessment 2- Commonly Confused Words.pdf'
import pdf3 from '../../../../../assets/Docs/Communication/Assessments/Assessment 3 - Parts of Speech.pdf'
import pdf4 from '../../../../../assets/Docs/Communication/Assessments/Assessment 4- Articles.pdf'
import pdf5 from '../../../../../assets/Docs/Communication/Assessments/Assessment 5 - Indiansims.pdf'
import pdf6 from '../../../../../assets/Docs/Communication/Assessments/Assessment 6 - Present Tense.pdf'
import pdf7 from '../../../../../assets/Docs/Communication/Assessments/Assessment 7 - Past Tense.pdf'
import pdf8 from '../../../../../assets/Docs/Communication/Assessments/Assessment 8 - Tenses.pdf'
import pdf9 from '../../../../../assets/Docs/Communication/Assessments/Assessment 9- Active Voice and Passive Voice.pdf'
import pdf10 from'../../../../../assets/Docs/Communication/Assessments/Assessment 10 -  Subject Verb Agreement.pdf'
import pdf11 from'../../../../../assets/Docs/Communication/Assessments/Assessment 11 - Email Writing.pdf'

function DisplayPdf(){
const[filterData, setFilterData]=useState("");

const { id } = useParams();
console.log(id)


const Assesments = [
    {title: "Synonyms and Antonyms",id: "assessments-synonyms-and-antonyms",pdf:pdf1},
    {title: "Commonly Confused Words",id: "assessments-commonly-confused-words",pdf:pdf2},
    {title: "Parts of Speech",id: "assessments-parts-of-speech",pdf:pdf3},
    {title: "Articles",id: "assessments-articles",pdf:pdf4},
    {title: "Indiansims",id: "assessments-indiansims",pdf:pdf5},
    {title: "Tenses",id: "assessments-tenses",pdf:pdf8},
    {title: "Present Tense",id: "assessments-present-tense",pdf:pdf6},
    {title: "Past Tense",id: "assessments-past-tense",pdf:pdf7},
    {title: "Active Voice and Passive Voice",id: "assessments-active-voice-and-passive-voice",pdf:pdf9},
    {title: "Subject Verb Agreement",id: "assessments-subject-verb-agreement",pdf:pdf10},
    {title: "Email Writing",id: "assessments-email-writing",pdf:pdf11},
    {title: "Handbook",id: "handbook",pdf:handbook},
    

  ];

  useEffect(()=>{

    for(let val of Assesments){
        if(id == val.id){
            setFilterData(val)
        }
      }

  },[id])
  console.log(filterData)
    return(
        <>
<div className="">
         <object data={filterData.pdf} type="application/pdf" className="w-[1570px] max-w-[-webkit-fill-available] h-[730px] " >
          </object>
        </div>
        </>
    )
}
export default DisplayPdf;