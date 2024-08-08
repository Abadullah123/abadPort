import React from 'react'
import Navbar from './comments/Navbar/Navbar'
import Hero from './comments/Hero/Hero'
import About from './comments/About/About'
import Services from './comments/Services/Services'
import Mywork from './comments/Mywork/Mywork'
import Contant from './comments/Contant/Contant'
import Footer from './comments/Footer/Footer'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar/>

      <Routes>
        
        <Route path='/' element={<>
          <Hero/>
      <About/>
      <Services/>
      <Mywork/>
      <Contant/>
        </>
        }/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Services/>}/>
        <Route path='/work' element={<Mywork/>}/>
        <Route path='/contact' element={<Contant/>}/>

      </Routes>
      <Footer/>
    </div>
  )
}

export default App
