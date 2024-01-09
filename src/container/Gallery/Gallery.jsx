import React, { useRef } from 'react';
import { BsInstagram , BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import './Gallery.css';
import { SubHeading } from '../../components';
import {images} from '../../constants';

const galleryImages = [images.gallery01 , images.gallery02 , images.gallery03 , images.gallery04];

const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if(direction === 'left'){
      current.scrollLeft -= 300;
    }
    else{
      current.scrollLeft += 300;
    }
  };

  return (
    
  <div className="gallery flex__center section__padding ">
    <div className="gallery__content">
      <SubHeading title="Instagram" />
      <h1 className="headtext__cormorant">Photo Gallery</h1>
      <p className="p__opensans"style={{color: '#AAA' , marginTop : '2rem'}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, atque minus fugiat expedita alias voluptas beatae culpa, nemo repellendus ipsa, facere enim! Recusandae corporis eum architecto! Iste molestiae aut ipsum.</p>
      <button type='button' className='custom__button' > Know More</button>
    </div>

    <div className="gallery__images">
      <div className="gallery__images-container" ref={scrollRef}>
        {galleryImages.map((image , index) => (
          <div className="gallery__images-card flex__center" key={'gallery_image-${index + 1}'}>
            <img src= {image} alt="gallery" />
            <BsInstagram className='gallery__image-icon'/>
          </div>
        ))}
      </div>

      <div className="gallery__images-arrows">
        <BsArrowLeftShort className='gallery__arrows-icon' onClick={() => scroll('left')}/>
        <BsArrowRightShort className='gallery__arrows-icon' onClick={() => scroll('right')}/>
      </div>
    </div>
  </div>
);
}

export default Gallery;
