import React from 'react'
import videoBg from '../assets/myvideo.mov'

const Main = () => {
  return (
    <div className='main'>
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
          <h3 className="main_body">17 MINUTES</h3>
        </div>
    </div>
  )
}

export default Main
