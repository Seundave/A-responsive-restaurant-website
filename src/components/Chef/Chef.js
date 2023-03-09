import React from 'react'
import './Chef.css'
import chef from '../../assets/chef.png'
import spoon from '../../assets/spoon.png'
import quote from '../../assets/quote.png'
import sign from '../../assets/sign.png'

function Chef() {
  return (
    <div className="chef">
      <div className="chef-left">
        <img src={chef} alt="chef" className='chef_img'/>
      </div>

      <div className="chef-right">
        <p> Chef’s Word</p>
        <img src={spoon} alt="spoon"/>
        <h1>What we believe in</h1>

        <div className='quote'>
          <img src={quote} alt="quote" className='quote_img'/>
          <p>The Pickle Hospitality family has been working meticulously to create a unique yet approachable and fun tiki program. This menu was put together thanks to their dedication, the advice and guidance from those in this industry who I’m grateful to call friends and consider them to be experts in the tiki world, as well as our beloved guests who have been an integral part of the journey, developing and evolving our cocktails through their honest feedback. As we prepare to open our doors, we can’t wait to welcome you in and show you what we’ve been up to</p>
        </div>

        <div className='chef-details'>
          <p className='chef-name'>Kevin Luo</p>
          <p className='chef-position'>Chef & Founder</p>
          <img src={sign} alt="sign" className='chef-signature'/>
        </div>
      </div>
    </div>
  )
}

export default Chef