import React from 'react'
import './About.css'
import line from '../../assest/line.png'
import portifile from '../../assest/portifile.png'
const About = () => {
  return (
    <>
    <div id='about' className='about'>
        <div className="about_title">
            <h1>About me</h1>
            <img src={line} alt='line'/>
            </div>      
            <div className='about_section'>
                <div className="about_left">
                <img src={portifile} alt="port" />
                </div>
                <div className="about_right">
                    <div className="about_para">
                        <p>I am an experienced Frontend backend Developer with over a decade of
                            professional expertise in the field. Throughout my career, I have
                            and the privilege of collaborating with prestigious organizations,
                            contributing  to their success the growth.
                        </p>
                        <p>
                            My passion for frontend backend development is not only 
                            reflected in my extensive experience but also in the 
                            enthusiasm and dedication I bring to each project.
                        </p>
                    </div>
                    <div className="about_skills">
                        <div className="about_skill"><p>HTML & CSS</p><hr style={{width:'40%'}}/></div>
                        <div className="about_skill"><p>React JS</p><hr style={{width:'70%'}}/></div>
                        <div className="about_skill"><p>JavaScript</p><hr style={{width:'60%'}}/></div>
                        <div className="about_skill"><p>Node JS</p><hr style={{width:'50%'}}/></div>
                        <div className="about_skill"><p>Express JS</p><hr style={{width:'40%'}}/></div>

                    </div>
                </div>
            </div>
                <div className="about_achievements">
                    <div className='about_achievement'>
                        <h1>02+</h1>
                        <p>YEARS OF EXPRIENCE</p>
                    </div>
                    <hr/>
                
                    <div className='about_achievement'>
                        <h1>30+</h1>
                         <p>PROJECT COMPLETED</p>
                    </div>
                    <hr/>
                    
                    <div className='about_achievement'>
                        <h1>10+</h1>
                        <p>Happy CLIENTS</p>
                    </div>
                    

                </div>
    </div>
    </>
  )
}

export default About
