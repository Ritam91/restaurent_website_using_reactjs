import React from 'react';

import './Laurels.css';
import { SubHeading , MenuItem } from '../../components';
import { images , data } from '../../constants';

const AwardCard = ({ award : {imgUrl , title , subtitle} }) => (
  <div className="laurels__awards-card">
    <img src={imgUrl} alt="award" />

    <div className="laurels__awards-card_content">
      <p className="p__cormorant" style={{color : '#DCCA87'}} > {title} </p>
      <p className="p__cormorant" > {subtitle} </p>
    </div>
  </div>
)

const Laurels = () => (
  <div className="app__bg section__padding wrapper" id="awards">
    <div className="wrapper__info">
      <SubHeading title="Awards & Recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>

      <div className="laurels__awards">
        {data.awards.map((award) => <AwardCard award={award} key = {award.title} /> )}
      </div>
    </div>

    <div className="wrapper__img">
      <img src={images.laurels} alt="laurels" />
    </div>
  </div>
);

export default Laurels;
