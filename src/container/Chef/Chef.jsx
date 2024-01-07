import React from 'react';

import './Chef.css';
import {images} from '../../constants';
import { SubHeading } from '../../components';

const Chef = () => (
  <div className="app__bg wrapper section__padding">
    <div className="wrapper__img wrapper__img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="wrapper__info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>

      <div className="chef__content">
        <div className="chef__content-quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">Cooking is like painting or writing a song. Just as there are only so many notes or</p>
        </div>
        <p className="p__opensans">colors, there are only so many flavors – it’s how you combine them that sets you apart.</p>
      </div>

      <div className="chef__sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);
 

export default Chef;
