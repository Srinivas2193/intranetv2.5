import React from "react";
import img1 from './../../../Images/Aboutus/home1.png'
import img2 from './../../../Images/Aboutus/home2.png'
import img3 from './../../../Images/Aboutus/home3.png'
import {AiOutlineRight,AiOutlineLeft} from 'react-icons/ai'
function Carosal (){

    return(
        <>
  <div className=" pb-[27px] ">
<div id="carouselExampleControls" className="carousel slide relative min-w-[568px] max-w-[978px] mt-[40px]" data-bs-ride="carousel">
  <div class="carousel-inner relative overflow-hidden rounded-[22px] drop-shadow-xl">
    <div class="carousel-item active relative float-left ">
      <img
        src={img1}
        class="block"
        alt="Wild Landscape"
      />
    </div>
    <div class="carousel-item relative float-left ">
      <img
        src={img2}
        className="block "
        alt="Camera"
      />
    </div>
    <div class="carousel-item relative float-left">
      <img
        src={img3}
        className="block"
        alt="Exotic Fruits"
      />
    </div>
  </div>
  <button
    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="prev"
  ><AiOutlineLeft size={35} color="black"/>
    {/* <span class="carousel-control-prev-icon bg-black inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span> */}
  </button>
  <button
    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="next"
  ><AiOutlineRight size={35} color="black"/>
    {/* <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span> */}
  </button>
</div>
</div>
        
        </>
    )
}

export default Carosal;