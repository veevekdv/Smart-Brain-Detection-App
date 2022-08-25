import React from 'react'
import Tilt from 'react-parallax-tilt';
import './Logo.css'
import brain from "./brain.png"

const Navigation = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className='Tilt br2 shadow-2'>
        <div className="Tilt-inner">
          <img src={brain} alt="logo" style={{paddingTop: '22px'}}/>
        </div>
      </Tilt>
    </div>
  )
}

export default Navigation;