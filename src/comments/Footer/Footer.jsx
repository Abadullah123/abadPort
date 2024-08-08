import React from 'react'
import './Footer.css'
import footer from '../../assest/logo.png'
import user_icon from '../../assest/user_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer_top">
            <div className="footer_top_left">
                <img src={footer} alt="footer" />
                <p>
                I'm a frontend and backend form Rawalpindi, Pakistan with 2 year of experience in multiple companies like Microsoft.</p>
            </div>
            <div className="footer_top_right">
                <div className="footer_email_input">
                    <img src={user_icon} alt="user" />
                    <input type="email" placeholder='Enter your email' />
                </div>

                <div className="footer_subscribe">Subscribe</div>
            </div>
        </div>
      <hr />
      <div className="footer_bottom">
        <p className='footer_bottom_left'>© 2024 Abad Ullah. All rights reserved</p>
        <div className="footer_bottom_right">
            <p>Term of the service</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>  
      </div>
    </div>
  )
}

export default Footer
