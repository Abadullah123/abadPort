import React from 'react'
import './Contant.css'
import line from '../../assest/line.png'
import email_icon from '../../assest/email_icon.png'
import call_icon from '../../assest/call_icon.png'
import location_icon from '../../assest/location_icon.png'
const Contant = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "3163dd7e-2592-4892-88d1-cf06694b4d72");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };



  return (
    <div id='contact' className='Contant'>

      <div className="content_title">
        <h1>Get in touch</h1>
        <img src={line} alt="line img" />
      </div>
      <div className="content_section">
        <div className="content_left">
          <h1>Let's talk</h1>
          <p>I'm currently avaliable to talk on new projects, so fell free tp send me a message
            about anything that you want me to work on. you can contant anytime.
             </p>
             <div className="contant_details">
              <div className="content_detail">
                     <img src={email_icon} alt="email" />  <p>abadu9802@gmail.com</p>
              </div>
                <div className="content_detail">
                     <img style={{width:'80px', height:'80px', marginLeft:'-20px'}}  src={call_icon} alt="call" />  <p>0316-5390-882</p>                
              </div>
                 <div className="content_detail">
                     <img style={{width:'50px'}} src={location_icon} alt="location" />  <p>Rawalpindi, Pakistan</p>                
              </div>

             </div>
        </div>
       

<form onSubmit={onSubmit}  className="cointainer_right">
<label htmlFor="">Your Name</label>
        <input type="text"  placeholder='name' name="name" />
        <label htmlFor="">Your Email</label>
        <input type="email" placeholder='email'  name="email"/>
        <label htmlFor="">Write your message here</label>
        <textarea name="message" rows='8' placeholder='Enter your message'></textarea>
        <button type="submit" className='cointainer_submit' >Submit Form</button>
      </form>

      </div>
    </div>
  )
}

export default Contant
