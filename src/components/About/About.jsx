import React from 'react'
import './About.css'
import ME from '../../assest/me-about.png'
import { FaAward } from 'react-icons/fa'
import { FiUser } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import Typed from 'react-typed'

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

              <h5>Clients</h5>
              <small>50+ clients Worldwide</small>
            </article>
            <article className='about_card'>
              <VscFolderLibrary className='about_icon' />

              <h5>Projects</h5>
              <small>20+ Projects</small>
            </article>
          </div>
          <div className='textLine'>
            <Typed
              strings={[
                'π° πππππππππ πππππππ ππππ πππ ππππ-ππππππππ',
                'πΆπππππππππ πππ ππππ ππππππππππ',
                'π«ππππππππ πππ ππππ-ππππππ ππππππππ',
                'π©ππππ ππππππππ ππππ πππ πππππππππ πππ ππππππ πππ',
                'π¬ππππππ πππ πππππππππ πππππππππππ ππ πΌπ°/πΌπΏ πππππππ',
                'πΆπππππππ πππππππππππ πππ πππππππ πππππ πππ πππππππππππ',
                'π¬ππππππ ππππ πππ ππππ πππππ ππ πππππππππ ππππππ ππππππππππ ππ ππππ-πππ',
              ]}
              typeSpeed={40}
              backSpeed={40}
              loop
            />
          </div>

          <a href='#contact' className='btn btn-primary'>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
