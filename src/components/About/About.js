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
            <p className='About-text'>Seundave Restaurant is a seasonal cafe and marketplace featuring fresh baked goods in East Hollywood, CA run by Pastry Chef/David Olaleye and Chef Emmanuel Lincoln. At Seundave restaurant, they continue their dedication to hand made food with artisan breads and pastries made daily with locally-sourced, heirloom grains, as well as a produce forward day-time menu.</p>
            <button className='know_more'>Know More</button>
        </div>

        <div className='knife'>
            <img src={knife} alt="knife" className='knife_img'/>
           
        </div>

        <div className='History'>
            <h1 className='Our_history'>Our History</h1>
            <img src={spoon} alt="spoon"className='spoon-img'/>
            <p className='History-text'>Seundave restaurant has been one of Brooklyn’s most celebrated local restaurants over the last two decades. Owned and operated by David Olaleye of the Tapa Collective, its defining feature is the 90-year-old Pullman dining car in the bar. The group has worked meticulously to bring unique, approachable and refreshing tiki drinks to New Yorkers.</p>
            <button className='know_more'>Know More</button>
        </div>
    </div>
  )
}

export default About
