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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
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