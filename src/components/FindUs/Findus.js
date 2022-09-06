import React from 'react'
import './Findus.css'
import spoon from '../../assets/spoon.png'
import findus from '../../assets/findus.png'

function Findus() {
  return (
    <div className='Find_us'>
        <div className='contact-info'>
            <p className='contact-info-social-media'>Contact</p>
            <img src={spoon} alt="spoon"/>
            <h1 className='contact-info-header'>Find Us</h1>
            <p className='contact-info-note'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
            <p className='hours'>Opening Hours</p>
            <p className='schedule'>Mon - Fri: 10:00 am - 02:00 am</p>
            <p className='schedule'>Sat - Sun: 10:00 am - 03:00 am</p>
            <button className='view-more-btn'>Visit Us</button>
        </div>

        <div className='findus'>
            <img src={findus} alt="findus" className='findus_img'/>
        </div>
    </div>
  )
}

export default Findus