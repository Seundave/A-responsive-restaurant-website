import React from 'react'
import './Header.css'
import welcome from '../../assets/welcome.png'
import spoon from '../../assets/spoon.png'

function Header() {
  return (
    <div className='Header'>
        <div className="Header-info">
            
           <div className="Header-info-text">
            <p className='header-info-text'>Chase the new Flavour</p>
            <img src={spoon} alt="spoon" className='spoon_img'/>
           </div>
            <div className="header-caption">
              <h1 className="header-h1">The Key to Fine Dining</h1>
              <p className='Header-text'>At Seundave restaurant, we are dedicated to all things seasonal with a market-driven day-time menu that also offers a variety of artisan breads and pastries made daily with locally-sourced, heirloom grains. </p>
              <button type="button" className='custom_btn'>Explore  Menu</button>
            </div>
        </div>

        <div className="Header-img">
            <img src={welcome} alt="welcome" />
        </div>
    </div>
  )
}

export default Header