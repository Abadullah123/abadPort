import React from 'react'
import './Mywork.css'
import  line_pattern from '../../assest/line.png'
import mywork_data from '../../assest/mywork_data'
import arrow from '../../assest/arrow_icon.png'

const Mywork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork_little">
            <h1>My latest work</h1>
            <img src={line_pattern} alt="line" />
        </div>
      <div className="mywork_cointainer">
        {mywork_data.map((work, index)=>{
          return <img key={index} src={work.w_img}  alt='imag'/>

        })
        }
      </div>
      <div className="mywork_show">
        <p>Show More</p>
        <img src={arrow} alt="line" />
      </div>

    </div>
  )
}

export default Mywork
