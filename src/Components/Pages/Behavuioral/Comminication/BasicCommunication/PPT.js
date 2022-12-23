import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function PPT(){
    const {id}=useParams();
    const[pptData, setPptData]=useState([]);
    console.log(id)
    const PPT = [
        {title: "MTI",id: "https://ideyalabscom-my.sharepoint.com/:p:/g/personal/shahuls_ideyalabs_com/EUY7FNvek2xEir-rj2QpgLwBIgdPhj2hEC7HpVwZZFsM0Q?e=1Rw44c"},
        {title: "PARTS OF SPEECH",id: "https://ideyalabscom-my.sharepoint.com/:p:/g/personal/shahuls_ideyalabs_com/ETcJ9fuvSx5Ml04gyEEOrNMBlOx_rOBNHb2TpvviA3qP9A?e=12Me6t  "},
        {title: "ARTICLES",id: "https://ideyalabscom-my.sharepoint.com/:p:/g/personal/shahuls_ideyalabs_com/Ee3hsNQvTW5Bg8qY5QiiAesBJ_h5gACXFbfZjbasRu6-uQ?e=f8n1BM"},
        {title: "INDIANISMS",id: "https://ideyalabscom-my.sharepoint.com/:p:/g/personal/shahuls_ideyalabs_com/EVZwSv_HguNHiN1q6JerW-YB6sXC7jqpT66HuCQgWDK2EA?e=3Um6j9"},
        {title: "TENSES",id: "https://ideyalabscom-my.sharepoint.com/:p:/g/personal/shahuls_ideyalabs_com/EbDl1-hDOwlKsbbBxbUxk54B7U7lGf6FKXNo3ouOfpjCSA?e=QleFMh"},
        {title: "7C’s Of Effective Communication",id: "https://ideyalabscom-my.sharepoint.com/:p:/g/personal/shahuls_ideyalabs_com/Ea_CIJLHip9GtKnR9fnMGEcBlGuoNF9aINDqzH4-8Xgl8Q?e=3J81fA"},
        {title: "Active Voice & Passive Voice",id: "https://ideyalabscom-my.sharepoint.com/:p:/g/personal/shahuls_ideyalabs_com/EXv3gBqVTwtNuULu3dmIWxkBgor9kTNgOOkwnA0QTNYx1g?e=byaCls"},
        {title: "Subject Verb Agreement",id: "https://ideyalabscom-my.sharepoint.com/:p:/g/personal/shahuls_ideyalabs_com/EXasFaInuNJIuBu86USTob8B2QbqTNEq84QRgsak_vQOCA?e=JA2F8v"},
        {title: " Email Etiquette",id: "https://ideyalabscom-my.sharepoint.com/:p:/g/personal/shahuls_ideyalabs_com/ES9iwLpvn8VHjiKSf7fFf9wB1CNXfyUNtTsgJz18YtaP-w?e=JdUOwp"},
        {title: "Telephone Etiquette",id: "https://ideyalabscom-my.sharepoint.com/:p:/g/personal/shahuls_ideyalabs_com/Ecw_HHsrJ0ZMox-xpXZmlS8BMpD4eEKfIhjJdQlR97_yIA?e=fphXFR"},
        {title: "VOCABULARY LEVEL 2",id: "https://ideyalabscom-my.sharepoint.com/:p:/g/personal/shahuls_ideyalabs_com/EUmkEU0wf9hMql3dHSoa1BUBQymvxRslsGsGSwEgSKUylA?e=VScaXL"},
        {title: "PHONETICS",id: "https://ideyalabscom-my.sharepoint.com/:p:/g/personal/shahuls_ideyalabs_com/Eb8mLNOWcCJMsuqj5RUSqGYBoplig23doEB-w_qRTRobww?e=uRpYTB"},
        {title: "Topics Covered",id: "https://ideyalabscom-my.sharepoint.com/:p:/g/personal/shahuls_ideyalabs_com/EWCHlT5qju5Dlxeray4i9H0BGNPG6q3C7JK54b9Yje2vzA?e=dyUyC7"},
        {title: "VOCABULARY - 1",id: "https://ideyalabscom-my.sharepoint.com/:p:/g/personal/shahuls_ideyalabs_com/EXQd11kFysRLjHumKNHYHF0BVvEYbsBzYXBVQ5LxxGtjzg?e=qqg9xG"},
      ];
      console.log(PPT)
      useEffect(() => {
       setPptData(PPT)
      },[]);
      console.log(pptData)
    return(
        
    <div className="w-[1570px] max-w-[-webkit-fill-available] h-[100%] flex flex-row flex-wrap justify-center items-center bg-slate-100 ">
      <div className="text-3xl text-white flex flex-row flex-wrap justify-center items-center">
            {pptData.map((val, key)=>{
                return(
                    <>
                <div className="p-4 m-9  hover:bg-orange-400 hover:text-white rounded-xl text-center hover-2">

                    <a href={val.id} target="_blank"> {val.title}</a>
                    </div>
                    </>
                )
            })}
            {/* {pptData.map((val,key)=>{
                    <p>hiuii</p>
                    // <a href={val.id} target="_blank"> {val.title}</a>
            })}
         */}
    </div>
    </div>
           
    )
}

export default PPT