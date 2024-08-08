import React from 'react'
import './Services.css'
import Service_Data from '../../assest/sevice_Data'
import arrow_icon from '../../assest/arrow_icon.png'
import line from '../../assest/line.png'
const Services = () => {
  return (
    <div id='service' className='services'>
        <div className="sevices_title">
            <h1>My services</h1>
            <img src={line} alt="line" />
        </div>      
        <div className="service_cointainter">
            {
                Service_Data.map((service, index)=>{
                    return<div key = {index} className='service_format'>
                        <h3>{service.s_on}</h3>
                        <h2>{service.s_name}</h2>
                        <p>{service.s_desc}</p>
                        <div className='services_readmore'>
                            <p>Read More</p>
                            <img src={arrow_icon} alt="arrow" />
                        </div>
                    </div>
                })
            }

        </div>
    </div>
  )
}

export default Services

