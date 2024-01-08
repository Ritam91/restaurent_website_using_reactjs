import React, { useState } from 'react';

import {BsFillPlayFill , BsPauseFill} from 'react-icons/bs'
import {meal} from '../../constants';
import './Intro.css';

const Intro = () => {
  const [playVideo , setPlayVideo] = useState(false);
  const vidRef = React.useRef();
  return(
  <div className="video">
    <video typeof='video/mp4' 
    ref={vidRef}
    src={meal}
    loop
    controls = {false} 
    muted
    />

    <div className="video__overlay flex__center">
      <div className="video__overlay-circle flex__center"
      onClick={() => {
        setPlayVideo(!playVideo);
        if(playVideo){
          vidRef.current.pause();
        }
        else{
          vidRef.current.play();
        }
      }}>

        {playVideo ? (<BsPauseFill color='#fff' fontSize={30}/>
        ) : (
          <BsFillPlayFill color='#fff' fontSize={30} />
        )}

      </div>
    </div>
  </div>
  )
};

export default Intro;
