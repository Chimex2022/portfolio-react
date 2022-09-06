import React from 'react'
import './About.css'
import ME from '../../assest/me-about.png'
import { FaAward } from 'react-icons/fa'
import { FiUser } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={ME} alt='' />
          </div>
        </div>
        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className='about_icon' />

              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className='about_card'>
              <FiUser className='about_icon' />

              <h5>Cients</h5>
              <small>200+ clients Worldwide</small>
            </article>
            <article className='about_card'>
              <VscFolderLibrary className='about_icon' />

              <h5>Projects</h5>
              <small>80+ Projects</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, cum
            omnis? Iusto corrupti, maxime veritatis aliquid quis cumque fugit
            aliquam at ipsam id vel adipisci esse? Quo magni maxime delectus!
          </p>
          <a href='#contact' className='btn btn-primary'>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
