import React from 'react'
import './about.css'
import Me from '../img/my-photo.jpg'

const About = () => {
  return (
    <div className='a'>
      <img src={Me} alt="Chandra-rizaldy" className='a-pic' />
      <h1>haello world</h1>
      <div className="a-wrapper">
        <div className="a-left">this is left</div>
        <div className="a-right">this is right</div>
      </div>
    </div>
  )
}

export default About