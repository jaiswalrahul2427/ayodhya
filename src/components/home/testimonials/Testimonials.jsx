import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mypic from "../../../assets/mypic.png"
export default function Testimonials() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false
  };
  return (
    <div className="pt-10 pb-10 bg-gradient-to-t to-orange-500 from-pink-700">
        <h1 className="text-2xl text-center text-white font font-poppins ">Testimonials</h1>
        <h3 className="pb-10 text-4xl text-center text-white ">What Our Traveller Says</h3>
    <Slider className="grid justify-center " {...settings}>
      <div className="grid justify-center text-center ">
        <img className="mx-auto rounded-full h-36 " src={mypic} alt="" />
      <p className="text-white ">Comfortable journey with effective price and coopearyive too</p>
      <h2 className="font-bold text-slate-800">name</h2>
      </div>
      <div className="grid text-center ">
<img className="mx-auto rounded-full h-36" src={mypic} alt="" />
<p className="text-white md:px-48 ">Thank you for organizing our tour so well and taking care of all the aspects of a fun vacation. You were extremely professional and well behaved in your services which made our trip an absolute success.</p>
      <h2 className="font-bold text-slate-800">Name</h2>
      </div>
 
    </Slider>
    </div>
  );
}