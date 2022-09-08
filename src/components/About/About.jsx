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
                '𝑰 𝒅𝒆𝒗𝒆𝒍𝒐𝒑𝒆𝒅 𝒘𝒆𝒃𝒔𝒊𝒕𝒆 𝒕𝒉𝒂𝒕 𝒂𝒓𝒆 𝒖𝒔𝒆𝒓-𝒇𝒓𝒊𝒆𝒏𝒅𝒍𝒚',
                '𝑶𝒑𝒕𝒊𝒎𝒊𝒛𝒊𝒆𝒅 𝒕𝒉𝒆 𝒖𝒔𝒆𝒓 𝒆𝒙𝒑𝒆𝒓𝒊𝒆𝒏𝒄𝒆',
                '𝑫𝒆𝒗𝒆𝒍𝒐𝒑𝒆𝒅 𝒏𝒆𝒘 𝒖𝒔𝒆𝒓-𝒇𝒂𝒄𝒊𝒏𝒈 𝒇𝒆𝒂𝒕𝒖𝒓𝒆𝒔',
                '𝑩𝒖𝒊𝒍𝒅 𝒓𝒆𝒖𝒔𝒂𝒃𝒍𝒆 𝒄𝒐𝒅𝒆 𝒂𝒏𝒅 𝒍𝒊𝒃𝒓𝒂𝒓𝒊𝒆𝒔 𝒇𝒐𝒓 𝒇𝒖𝒕𝒖𝒓𝒆 𝒖𝒔𝒆',
                '𝑬𝒏𝒔𝒖𝒓𝒆𝒅 𝒕𝒉𝒆 𝒕𝒆𝒄𝒉𝒏𝒊𝒄𝒂𝒍 𝒇𝒆𝒂𝒔𝒊𝒃𝒊𝒍𝒊𝒕𝒚 𝒐𝒇 𝑼𝑰/𝑼𝑿 𝒅𝒆𝒔𝒊𝒈𝒏𝒔',
                '𝑶𝒑𝒕𝒊𝒎𝒊𝒛𝒆 𝒂𝒑𝒑𝒍𝒊𝒄𝒂𝒕𝒊𝒐𝒏 𝒇𝒐𝒓 𝒎𝒂𝒙𝒊𝒎𝒖𝒎 𝒔𝒑𝒆𝒆𝒅 𝒂𝒏𝒅 𝒔𝒄𝒂𝒍𝒂𝒃𝒊𝒍𝒊𝒕𝒚',
                '𝑬𝒏𝒔𝒖𝒓𝒆𝒅 𝒕𝒉𝒂𝒕 𝒂𝒍𝒍 𝒖𝒔𝒆𝒓 𝒊𝒏𝒑𝒖𝒕 𝒊𝒔 𝒗𝒂𝒍𝒊𝒅𝒂𝒕𝒆𝒅 𝒃𝒆𝒇𝒐𝒓𝒆 𝒔𝒖𝒃𝒎𝒊𝒕𝒕𝒊𝒏𝒈 𝒕𝒐 𝒃𝒂𝒄𝒌-𝒆𝒏𝒅',
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
