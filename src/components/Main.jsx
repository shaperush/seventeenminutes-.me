import React from 'react'
import { Helmet } from 'react-helmet';
import videoBg from '../assets/myvideo.mov'

const TITLE = 'My Page Title';

const Main = () => {
  return (
    <div className='main'>
      <Helmet>
          <title>{ TITLE }</title>
      </Helmet>
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
            <h1>17 MINUTES</h1>
        </div>
    </div>
  )
}

export default Main
