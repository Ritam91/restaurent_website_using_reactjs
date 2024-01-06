import React from 'react';

import './SpecialMenu.css';
import { SubHeading , MenuItem } from '../../components';
import { images , data } from '../../constants';

const SpecialMenu = () => (
  <div className="specialMenu flex__center section__padding" id="menu">
    <div className="specialMenu__title">
      <SubHeading title= "Elevated dining, bite by bite: Enjoy our exclusive Specials." />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>

    <div className="specialMenu__menu">
      <div className="specialMenu__menu-wine flex__center">
        <p className="specialMenu__menu-heading" >Wine & Beer</p>
        <div className="specialMenu__menu-menu_items">
          {data.wines.map((wine , index) => (
            <p>{wine.title}</p>
          ))}
        </div>
      </div>

      <div className="specialMenu__menu-wine">
        <img src= {images.menu} alt="menu" />
      </div>

      <div className="specialMenu__menu-cocktails flex__center">
        <p className="specialMenu__menu-heading" >Wine & Beer</p>
        <div className="specialMenu__menu-menu_items">
          {data.cocktails.map((cocktails , index) => (
            <p>{cocktails.title}</p>
          ))}
        </div>
      </div>

    </div>

    <div style={{marginTop : '15px'}}>
      <button className="custom__button">
        
      </button>
    </div>
  </div>
);

export default SpecialMenu;
