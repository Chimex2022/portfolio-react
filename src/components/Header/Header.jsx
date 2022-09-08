import React from 'react'

import './Header.css'
import CTA from './CTA'
import ME from '../../assest/me.png'
import HeaderSocials from '../../HeaderSocials'
import Typed from 'react-typed'

const Header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h5>Hello I'm</h5>
        <h1>Anyaele Gabriel</h1>

        <div className='animated-typing'>
          <Typed
            strings={[
              "I'm a Frontend Developer",
              "I'm a UI/UX Designer",
              'I Love Programming',
            ]}
            typeSpeed={40}
            backSpeed={40}
            loop
          />
        </div>

        <CTA />
        <HeaderSocials />
        <div className='me'>
          <img src={ME} alt='me' />
        </div>
        <a href='#contact' className='scroll_down'>
          Scroll down
        </a>
      </div>
    </header>
  )
}

export default Header
