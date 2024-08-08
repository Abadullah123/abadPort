import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'
import abadlogo from '../../assest/abad.png'
const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={abadlogo} alt="abad" />
        <h1><span>I'm Abad Ullah, </span> frontend  backend developer based in Pakistan.</h1>
        <p>I'm a  frontend and backend form Rawalpindi, Pakistan with 2 year of experience in multiple companies like Microsoft. </p>
        <div className='hero_action'>
            <div className="hero_connect">
               <Link className='link' to='/contact' > connect with me </Link>
            </div>
            <div className="hero_resume">My resume</div>

        </div>
    </div>
  )
}

export default Hero
