import React from 'react'
import './Intro.css'
import {BsFillPlayFill,BsPauseFill} from 'react-icons/bs'
import meal from '../../assets/meal.mp4'

function Intro() {
    const [playVideo, setPlayVideo] = React.useState(false);
    const vidRef = React.useRef();


    const handleVideo =()=>{
        setPlayVideo ((prevPlayVideo)=> !prevPlayVideo);

        if (playVideo){
            vidRef.current.pause();
        }else{
            vidRef.current.play();
        }
    }
  return (
    <div className='intro-video'>
        <video src={meal} ref={vidRef} type="video/mp4" Loop controls={false} muted/>

        <div className='video-overlay'>
            <div className="video-overlay-circle" onClick={handleVideo}>
                {playVideo 
                ? <BsPauseFill color="#fff" font-size={30} />
                : <BsFillPlayFill color="#fff" font-size={30}/>}
            </div>
        </div>
    </div>
  )
}

export default Intro