import React from 'react'
import './Photo.css'
import spoon from '../../assets/spoon.png'

function Photo() {
  return (
    <div className='photo'>
        <div className='photo-info'>
            <p className='photo-info-social-media'>Instagram</p>
            <img src={spoon} alt="spoon"/>
            <h1 className='photo-info-header'>Photo Gallery</h1>
            <p className='photo-info-note'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
            <button className='view-more-btn'>View More</button>
        </div>

        <div className='carousels'>
          <p>Carousels</p>
        </div>
    </div>
  )
}

export default Photo