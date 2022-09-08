import React from 'react'
import './Footer.css'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>
        KIRCHOFF
      </a>
      <ul className='permalinks'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#experience'>Experience</a>
        </li>
        <li>
          <a href='#testimonial'>Testimonials</a>
        </li>
        <li>
          <a href='#services'>Services</a>
        </li>
      </ul>
      <div className='footer_socials'>
        <a href='https://facebook.com'>
          <BsFacebook />
        </a>
        <a href='https://instagram.com'>
          <BsInstagram />
        </a>
        <a href='https://twitter.com'>
          <BsTwitter />
        </a>
      </div>
      <div className="footer_copyright">
        <small>
          &copy; Kirchoff Tutorials All right reserved.
        </small>
      </div>
    </footer>
  )
}
export default Footer
