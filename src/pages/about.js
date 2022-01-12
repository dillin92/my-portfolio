import React from "react";
import image1 from "../assets/cover/thehelsleys.png";
import image2 from '../assets/cover/thehelsleyboys.png';
import image3 from '../assets/cover/thehelsleysinflorida.png';
import image4 from '../assets/cover/aniinchicago.png';
import image5 from '../assets/cover/eliasinthesky.png';
import image6 from '../assets/cover/jayleighatthebeach.png';
import image7 from '../assets/cover/dillyillyin.png';




let slides = [
     
    <div id="about" style={{ textAlign: "center"}}>
        <img style={{ height: "100%", width: "100%"}} src={image1} alt="1"/>
        <h6>The Helsley's</h6>
    </div>
   ,
   <div id="about" style={{ textAlign: "center"}}>
        <img style={{ height: "500px", width: "750px"}}  src={image2} alt="1"/>
        <h6> A Chirstmas Photo of my sons and I</h6>
    </div>

      ,
      <div id="about" style={{ textAlign: "center"}}>
        <img style={{ height: "500px", width: "750px"}} src={image3} alt="1"/>
        <h6> My family in Navarre, Florida</h6>
    </div>,

    <div id="about" style={{ textAlign: "center"}}>
    <img style={{ height: "500px", width: "750px"}} src={image4} alt="1"/>
    <h6>My daughter Anistacia in front of the Marina Towers in Chicago, Illinois</h6>
</div>,

<div id="about" style={{ textAlign: "center"}}>
        <img style={{ height: "550px", width: "750px"}} src={image5} alt="1"/>
        <h6>My son Elias looking down from the Sears Tower in Chicago, Illinois</h6>
    </div>,
    <div id="about" style={{ textAlign: "center"}}>
    <img style={{ height: "500px", width: "750px"}} src={image6} alt="1"/>
    <h6>My step-daughter Jayleigh playing at the beach in Oskaloosa Island, Florida</h6>
</div>,
<div id="about" style={{ textAlign: "center"}}>
        <img style={{ height: "500px", width: "750px"}} src={image7} alt="1"/>
        <h6>Me performing at the Emerson theatre in Indianapolis</h6>
    </div>
 
    
];

export default slides;