import React from 'react'
<<<<<<< HEAD
import videoBg from '../assets/myvideo.mov'
=======
import videoBg from '../myvideo.mov'
>>>>>>> bfe0d5a7b637770ae59c4acf19d6b61ff8ce7ef2

const Main = () => {
  return (
    <div className='main'>
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
            <h1>Welcome</h1>
            <p>To my site.</p>
        </div>
    </div>
  )
}

export default Main
