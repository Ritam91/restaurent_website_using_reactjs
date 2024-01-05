import React from "react";
import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div className="aboutus app__bg flex__center section__padding" id="about">
    <div className="aboutus__overlay flex__center">
      <img src={images.F} alt="F letter" />
    </div>

    <div className="aboutus__content flex__center">

      <div className="aboutus__content-about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="spoon" className="spoon__img" />
        <p className="p__opensans">
          At FlavorFiesta, we craft more than meals; we create experiences. Our
          chefs infuse passion into each dish, delivering a dining adventure
          that resonates with innovation, tradition, and delectable memories
        </p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="aboutus__content-knife flex__center">
        <img src={images.knife} alt="knife" />
      </div>

      <div className="aboutus__content-history">
        <h1 className="headtext__cormorant"> Our History</h1>
        <img src={images.spoon} alt="spoon" className="spoon__img" />
        <p className="p__opensans">
          At FlavorFiesta, we craft more than meals; we create experiences. Our
          chefs infuse passion into each dish, delivering a dining adventure
          that resonates with innovation, tradition, and delectable memories
        </p>
        <button type="button" className="custom__button">Know More</button>
      </div>

    </div>
  </div>
);

export default AboutUs;
