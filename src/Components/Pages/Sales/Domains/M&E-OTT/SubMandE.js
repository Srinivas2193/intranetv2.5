import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import pdf1 from '../../../../../assets/Docs/INTRANET- iStream Case Study.pdf'
import pdf2 from '../../../../../assets/Docs/INTRANET- iStream DEMO v01.pdf'

function SubMandE(){
  const[visible, setVisible]=useState(true)
const [filterData, setFilterData] = useState("");


    const {id}=useParams();
    console.log(id)
    const data=[
        {title:"iStream -TV's and WEB",id:"istream-tv&web",pdf:pdf1},
        {title:"iStream - mobile",id:"istream-mobile",pdf:pdf2},
        {title:"Comcast -Lightining",id:"comcast-lighting",url:"#"},
        {title:"Sencore",id:"sencore",url:"#"},
    ]
  useEffect(() => {
    console.log("useEffect");
    data.filter((item) => {
      if (item.id === id) {
        setFilterData(item);
      }
    });
    setVisible(true)

  }, [id]);
  const EnablePdf=()=>{
      setVisible(false)
  }
  return (
    <>
      {visible && filterData.id && <div className="w-[1570px] max-w-[-webkit-fill-available] h-[100%] flex flex-row flex-wrap justify-center items-center bg-slate-100 ">
      <div className="text-3xl text-white">
        <div className="p-4 bg-black rounded-xl hover-2">
          <a href={filterData.url}>
            {filterData.title}
          </a>
        </div>
      </div>
    </div>}

      {visible === false && <>
      { filterData.pdf ? <div>
        <object data={filterData.pdf} type="application/pdf" className="w-[1570px] max-w-[-webkit-fill-available] h-[730px] " >
          </object>
        </div>: 
        <div className="w-[1570px] max-w-[-webkit-fill-available] h-[100%] flex flex-row flex-wrap justify-center items-center bg-slate-100 ">
        <div className="text-3xl text-white">
          <div className="p-4 bg-black rounded-xl hover-2">
            <a href={filterData.url}>
              {filterData.title}
            </a>
          </div>
        </div>
      </div>

        }
        </>
        }
      </>
  );
}
export default SubMandE;