import React, { useState } from 'react'
import scrollRef from 'react'
import Meal from './Meal'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import gallery01 from '../../assets/gallery01.png'
import gallery02 from '../../assets/pizza-329523_1920.jpg'
import gallery03 from '../../assets/food-712665_1920.jpg'
import gallery04 from '../../assets/salmon-518032_1920.jpg'
import './Photo.css'
import spoon from '../../assets/spoon.png'


const images = [gallery01, gallery02, gallery03, gallery04]




function Photo() {
  
  const [first, setFirst] = useState (0);
  const [second, setSecond] = useState (1);
  const [third, setThird] = useState (2);
  const meal1 = images[first]
  const meal2 = images[second]
  const meal3 = images[third]

  const checkNumber = (number) =>{
    if (number < 0  ){
      return images.length-1;
    }
    if (number > images.length -1){
      return 0;
    }
    return number;
  }

  const nextMeal =() =>{
   setFirst(checkNumber(first+1)) 
   setSecond(checkNumber(second+1)) 
   setThird(checkNumber(third+1)) 
   
  }

  const prevMeal = ()=>{
    setFirst(checkNumber(first-1)) 
    setSecond(checkNumber(second-1)) 
    setThird(checkNumber(third-1)) 
  }
  
  return (
    <div className='photo' id="gallery">
        <div className='photo-info'>
            <p className='photo-info-social-media'>Instagram</p>
            <img src={spoon} alt="spoon"/>
            <h1 className='photo-info-header'>Photo Gallery</h1>
            <p className='photo-info-note'>Have a view of our delicious and sumptous meal!</p>
            <button className='view-more-btn'>View More</button>
        </div>

        <div className="app__gallery-images">
          <div className="app__gallery-images_container" ref={scrollRef}>
            <Meal meal={meal1}/>
            <Meal meal={meal2}/>
            <Meal meal={meal3}/>
            
          </div>
          <div className="app__gallery-images_arrows">
            <BsArrowLeftShort className="gallery__arrow-icon" onClick={prevMeal}/>
            <BsArrowRightShort className="gallery__arrow-icon" onClick={nextMeal}/>
          </div>
        </div>
    </div>
  )
}

export default Photo