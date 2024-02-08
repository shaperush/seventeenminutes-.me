import React from 'react'
import videoBg from '../assets/video.mov'
import tiktokIcon from '../assets/tiktok.png'
import instagramIcon from '../assets/instagram.png'



const Main = () => {
  return (
    <div className='main'>
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
          <h2 className="title_element">17 MINUTES</h2>
            <footer className="footer">
            <div className="social-icons">
                <a href="https://www.instagram.com/seventeenminutes.me">
                    <img src={instagramIcon} className="icon" />
                </a>
                <a href="https://www.tiktok.com/@seventeenminutes.me">
                    <img src={tiktokIcon}  className="icon" />
                </a>
            </div>
        </footer>
        </div>
    </div>
  )
}

export default Main;
