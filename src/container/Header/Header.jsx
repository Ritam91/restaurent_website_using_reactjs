import React from 'react';

import './Header.css';
import { images } from '../../constants';
import { SubHeading } from '../../components';

const Header = () => (
  <div className="header section__padding wrapper" id="home">

    <div className="wrapper__info">
      <SubHeading title="Your Ultimate Dining Destination" />
      <h1 className="header__h1">
      Sip, savor, rejoice, repeat
      </h1>

      <p className="p__opensans" style={ {margin: '2rem 0'} }>
      Escape to culinary bliss at FlavorFiesta . Unleash your palate with our uniquely crafted dishes, where each bite is an extraordinary experience.
      </p>

      <button type='button' className='custom__button'>
        Explore Menu
      </button>
    </div>

    <div className="wrapper__img">
      <img src= {images.welcome} alt="welcome" />
    </div>

  </div>
);

export default Header;
