import React from "react";
import Slider from "react-slick";
import hanuman_ji from '../../../assets/hanuman_ji.webp'
import diwali from '../../../assets/diwali.jpg'
import ram_mandir from '../../../assets/Ram_mandir.jpg'
import day_3 from "../../../assets/Day-3.jpg"
import mahal from "../../../assets/mahal.jpg"
import boat from "../../../assets/boat.jpg"
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
  autoplay:true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
  };
  return (
    <Slider {...settings} className="z-10 ">
      <div>
        <img   className="w-full sm:h-[600px] h-[500px] " src={diwali} alt="" />
      </div>
      <div>
<img   className="w-full sm:h-[600px] h-[500px] " src={hanuman_ji} alt="" />   
   </div>
      <div>
      <img  className="w-full sm:h-[600px] h-[500px] "  src={day_3} alt="" />   
      </div>
      <div>
      <img  className="w-full sm:h-[600px] h-[500px] "  src={ram_mandir} alt="" />   
      </div>
      <div>
      <img  className="w-full sm:h-[600px] h-[500px] "  src={mahal} alt="" />   
      </div>
      <div>
      <img  className="w-full sm:h-[600px] h-[500px] "  src={boat} alt="" />   
      </div>
    </Slider>
  );
}