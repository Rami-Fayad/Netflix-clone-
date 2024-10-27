import React from 'react'
import './Footer.css'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
      <FaFacebookF/>
      <FaTwitter/>
      <FaInstagram/>
      <FaYoutube/>
    
      </div>
      <ul>
        <li>Audio Discription</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Jobs</li>
        <li>Media Center</li>
        <li> Contries</li>
        <li>Legal Terms</li>
        <li>Term of use</li>
        <li>FAQ </li>
        <li>Cookie Prefences </li>
        <li>Privacy </li>
        <li>Contact us </li>

      

      </ul>
      <p className="copy-right">
        &copy; 1997 - 2024 Netflix, Inc.
      </p>
    </div>
  )
}

export default Footer
