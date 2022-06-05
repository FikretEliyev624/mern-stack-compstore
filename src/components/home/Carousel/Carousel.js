import React from "react";
import Slider from "react-slick";
import logo from  "./img/2.png";
import logo2 from "./img/Tuf15_1-500x500-removebg-preview.png"
import logo3 from "./img/01_170_145_2-removebg-preview.png"
import logo4 from "./img/Lenovo_Legion_5_15_Gaming_Laptop-removebg-preview.png";
import logo5 from "./img/1621425043_6591331_0-removebg-preview.png"
export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    arrows:false,
    autoplay: true,
    slidesToShow: 1,
    autoplaySpeed: 2000,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings} className="dark:bg-darkmode transition duration-500 focus:border-none">
      <div>
        <img className="ml-97 mt-2 h-97 w-97" src={logo} alt=""/>
      </div>
      <div>
      <img className="ml-97 mt-2" src={logo2} alt=""/>
      </div>
      <div>
      <img className="ml-97 mt-2" src={logo3} alt=""/>
      </div>
      <div>
      <img className="ml-97 mt-2" src={logo4} alt=""/>
      </div>
      <div>
      <img className="ml-97 mt-2" src={logo5} alt=""/>
      </div>
    </Slider>
  );
}