import React from 'react'
import videoBg from '../assets/myvideo.mov'



const Main = () => {
  return (
    <div className='main'>
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
          <h2 className="title_element">17 MINUTES</h2>
            <footer className="footer">
            <div className="social-icons">
                <a href="https://www.instagram.com">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png" className="icon" />
                </a>
                <a href="https://www.tiktok.com">
                    <img src="https://e7.pngegg.com/pngimages/449/200/png-clipart-tiktok-icon-tech-companies-thumbnail.png" className="icon" />
                </a>
            </div>
        </footer>
        </div>
    </div>
  )
}

export default Main;
