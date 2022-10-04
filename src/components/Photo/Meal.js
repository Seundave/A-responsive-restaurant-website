import React from 'react'
import { BsInstagram } from 'react-icons/bs';

function Meal(props) {
  return (
    <div className="app__gallery-images_card flex__center">
        <img src={props.meal} alt="gallery_image" />
        <BsInstagram className="gallery__image-icon" />
    </div>
  )
}

export default Meal