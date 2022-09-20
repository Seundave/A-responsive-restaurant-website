import React from 'react'
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import gallery01 from '../../assets/gallery01.png'
import gallery02 from '../../assets/gallery01.png'
import gallery03 from '../../assets/gallery01.png'
import gallery04 from '../../assets/gallery01.png'
import './Photo.css'
import spoon from '../../assets/spoon.png'





function Photo() {


  const Gallery = () => {
    const scrollRef = React.useRef(null);
  
    const scroll = (direction) => {
      const { current } = scrollRef;
  
      if (direction === 'left') {
        current.scrollLeft -= 300;
      } else {
        current.scrollLeft += 300;
      }
  };
  
  return (
    <div className='photo'>
        <div className='photo-info'>
            <p className='photo-info-social-media'>Instagram</p>
            <img src={spoon} alt="spoon"/>
            <h1 className='photo-info-header'>Photo Gallery</h1>
            <p className='photo-info-note'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
            <button className='view-more-btn'>View More</button>
        </div>

        <div className="app__gallery-images">
          <div className="app__gallery-images_container" ref={scrollRef}>
            {[gallery01, gallery02, gallery03, gallery04].map((image, index) => (
              <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
                <img src={image} alt="gallery_image" />
                <BsInstagram className="gallery__image-icon" />
              </div>
            ))}
          </div>
          <div className="app__gallery-images_arrows">
            <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
            <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
          </div>
      </div>
    </div>
  )
}

export default Photo