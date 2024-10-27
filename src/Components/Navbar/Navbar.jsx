import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { FaSearch , FaBell,FaChevronDown } from 'react-icons/fa';
import profile from '../../assets/profile_img.png'
import {logout} from '../../firebase'
const Navbar = () => {
   const nref = useRef();
   useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if (window.scrollY >=80)
         nref.current.classList.add('nav-dark');
      else
      nref.current.classList.remove('nav-dark');
    })
   }, [])
  return (
    <div ref={nref} className='navbar'>
        <div className='navbar-left'>
     <img src={logo}  />
     <ul>
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>New & Popular</li>
        <li>Browse by Languages</li>
     </ul>
        </div>

      <div className='navbar-right'>
         <FaSearch className='icons'/>
         <p>Children</p>
         <FaBell className='icons'/>
         <div className='navbar-profile'>
            <img src={profile} className='profile' />
            <FaChevronDown/>
            <div className="dropdown">
                <p onClick={()=>{
                  {logout()}
                }}>Sign out from netflix</p>
            </div>


         </div>

      </div>
    </div>
  )
}

export default Navbar
