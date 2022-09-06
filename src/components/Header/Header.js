import React from 'react'
import './Header.css'
import welcome from '../../assets/welcome.png'
import spoon from '../../assets/spoon.png'

function Header() {
  return (
    <div className='Header'>
        <div className="Header-info">
            
            <p className='header-info-text'>Chase the new Flavour</p>
            <img src={spoon} alt="spoon" className='spoon_img'/>
            <h1 className="header-h1">The Key to Fine Dining</h1>
            <p className='Header-text'>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
            <button type="button" className='custom_btn'>Explore  Menu</button>
        </div>

        <div className="Header-img">
            <img src={welcome} alt="welcome"/>
        </div>
    </div>
  )
}

export default Header