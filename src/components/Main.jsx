import React from 'react'
import videoBg from '../assets/myvideo.mov'

const Main = () => {
  return (
    <div className='main'>
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
          <h2 className="title_element">17 MINUTES</h2>
        </div>
    </div>
  )
}

export default Main
