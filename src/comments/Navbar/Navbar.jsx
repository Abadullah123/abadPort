import React, { useRef, useState, } from 'react'
import './Navbar.css'
import logo from '../../assest/logo.png'
import underline from '../../assest/line.png'
import { Link } from 'react-router-dom'
import menu_icon from '../../assest/menu_icon.png'
import close_icon from '../../assest/close_ion.png'



const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const menuRfu = useRef()

  const openMenu = ()=>{
    menuRfu.current.style.right = '0'
  }

  const closeMenu = ()=>{
    menuRfu.current.style.right = '-350px'
  }

  return (
    <div className='navbar'>
      <img className='logo' src={logo} alt="logo" />
      <img src={menu_icon} onClick={openMenu} alt="menu"  className='nav_mob_open'/>
      <ul ref={menuRfu} className='nav_menu'>
        <img src={close_icon} alt="clso" onClick={closeMenu} className='nav_mob_close' />
        <Link className='link' to='/'>  <p onClick={()=> setMenu("home")}>Home </p> {menu==='home'? <img src={underline} alt='' /> : <></> }</Link>
        <Link className='link' to='/about'>  <p onClick={()=> setMenu("about")}>About Me </p>   {menu==='about'? <img src={underline} alt='' /> : <></> }  </Link>
        <Link className='link' to='/service'>   <p onClick={()=> setMenu("service")}>Service </p>   {menu==='service'? <img src={underline} alt='' /> : <></> }  </Link>
        <Link className='link' to='/work'> <p onClick={()=> setMenu("work")}>Portfolio </p>   {menu==='work'? <img src={underline} alt='' /> : <></> }  </Link>
        <Link className='link' to='/contact'>  <p onClick={()=> setMenu("contact")}>Contact </p>   {menu==='contact'? <img src={underline} alt='' /> : <></> }  </Link>

      </ul>

                             


      <div className="nav_connect">
        <Link className='link' to='/contact'>
        Connect with Me                                 
        </Link>

      </div>
    </div>
  )
}

export default Navbar
