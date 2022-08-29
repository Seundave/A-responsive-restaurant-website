import React from 'react'
import spoon from '../../assets/spoon.png'

function Subheading() {
  return (
    <div className='Subheading'>
      <p>Chase the new Flavour</p>
      <img src={spoon} alt="spoon" className='spoon_img'/>
    </div>
  )
}

export default Subheading