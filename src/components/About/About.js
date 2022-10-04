import React from 'react'
import './About.css';
import knife from '../../assets/knife.png'
import spoon from '../../assets/spoon.png'
import G from '../../assets/G.png'


function About() {
  return (
    <div className='About' id="about">

        <div className='G'>
            <img src={G} alt="G"/>
        </div>
        <div className='About-us'>
            <h1 className='About_us'>About us</h1>
            <img src={spoon} alt="spoon" className='spoon-img'/>
            <p className='About-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
            <button className='know_more'>Know More</button>
        </div>

        <div className='knife'>
            <img src={knife} alt="knife" className='knife_img'/>
           
        </div>

        <div className='History'>
            <h1 className='Our_history'>Our History</h1>
            <img src={spoon} alt="spoon"className='spoon-img'/>
            <p className='History-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
            <button className='know_more'>Know More</button>
        </div>
    </div>
  )
}

export default About
