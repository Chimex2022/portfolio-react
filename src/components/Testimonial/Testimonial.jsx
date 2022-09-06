import React from 'react'
import './Testimonial.css'
import AVTR1 from '../../assest/avatar1.jpg'
import AVTR2 from '../../assest/avatar2.jpg'
import AVTR3 from '../../assest/avatar3.jpg'
import AVTR4 from '../../assest/avatar4.jpg'

import { Pagination } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className='container testimonial_container'>
        <SwiperSlide className='testimonial'>
          <div className='client_avatar'>
            <img src={AVTR1} alt='Avatar one' />
          </div>
          <h5 className='client_name'>Ernest Archiever</h5>
          <small className='client_review'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            possimus quos! Numquam molestiae corporis autem facilis
            necessitatibus est, officia voluptatem maxime quasi odio quia
            dolorem, dolor, aliquam magni illum neque.
          </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className='client_avatar'>
            <img src={AVTR2} alt='Avatar one' />
          </div>
          <h5 className='client_name'>Ernest Archiever</h5>
          <small className='client_review'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            possimus quos! Numquam molestiae corporis autem facilis
            necessitatibus est, officia voluptatem maxime quasi odio quia
            dolorem, dolor, aliquam magni illum neque.
          </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className='client_avatar'>
            <img src={AVTR3} alt='Avatar one' />
          </div>
          <h5 className='client_name'>Ernest Archiever</h5>
          <small className='client_review'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            possimus quos! Numquam molestiae corporis autem facilis
            necessitatibus est, officia voluptatem maxime quasi odio quia
            dolorem, dolor, aliquam magni illum neque.
          </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className='client_avatar'>
            <img src={AVTR4} alt='Avatar one' />
          </div>
          <h5 className='client_name'>Ernest Archiever</h5>
          <small className='client_review'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            possimus quos! Numquam molestiae corporis autem facilis
            necessitatibus est, officia voluptatem maxime quasi odio quia
            dolorem, dolor, aliquam magni illum neque.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonial
