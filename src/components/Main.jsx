import React from 'react'
import videoBg from '../assets/myvideo.mov'

const Main = () => {
  return (
    <div className='main'>
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
          <h1>Welcomes</h1>
        </div>
    </div>
  )
}

export default Main
