import React from 'react'
import './Testimonial.css'
import AVTR1 from '../../assest/avatar1.jpeg'
import AVTR2 from '../../assest/avatar2.jpg'
import AVTR3 from '../../assest/avatar3.jpg'
import AVTR4 from '../../assest/avatar4.jpeg'

// import { Pagination } from 'swiper'

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
        <SwiperSlide className='testimonials'>
          {/* modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }} */}
          <div className='client_avatar'>
            <img src={AVTR1} alt='Avatar one' />
          </div>
          <h5 className='client_name'>Richard</h5>
          <small className='client_review'>
            𝑰 𝒎𝒖𝒔𝒕 𝒄𝒐𝒏𝒇𝒆𝒔𝒔 𝑮𝒂𝒃𝒓𝒊𝒆𝒍 𝒉𝒂𝒔 𝒃𝒆𝒆𝒏 𝒕𝒉𝒆 𝒈𝒐𝒐𝒅 𝒅𝒆𝒗𝒆𝒍𝒐𝒑𝒆𝒓 𝑰 𝒉𝒂𝒗𝒆 𝒆𝒗𝒆𝒓 𝒔𝒆𝒆𝒏,
            w𝒊𝒕𝒉 𝒂 𝒍𝒐𝒕 𝒐𝒇 𝒆𝒏𝒆𝒓𝒈𝒚 𝒐𝒏 𝒘𝒆𝒃𝒔𝒊𝒕𝒆 𝒃𝒖𝒊𝒍𝒅𝒊𝒏𝒈 𝒂𝒏𝒅 𝒅𝒆𝒔𝒊𝒈𝒏 𝒄𝒐𝒏𝒄𝒆𝒑𝒕𝒔. 𝑰 𝒔𝒂𝒚
            𝒌𝒖𝒅𝒐𝒔 𝒕𝒐 𝑮𝒂𝒃𝒓𝒊𝒆𝒍!😍😍
          </small>
        </SwiperSlide>
        <SwiperSlide className='testimonials'>
          <div className='client_avatar'>
            <img src={AVTR2} alt='Avatar one' />
          </div>
          <h5 className='client_name'>Nnabuaku Samuel</h5>
          <small className='client_review'>
            𝑻𝒉𝒊𝒔 𝒔𝒊𝒕𝒆 𝒊𝒔 𝒆𝒙𝒕𝒓𝒆𝒎𝒆𝒍𝒚 𝒃𝒆𝒂𝒖𝒕𝒊𝒇𝒖𝒍, 𝑲𝒖𝒅𝒐𝒔 𝒕𝒐 𝒕𝒉𝒆 𝒅𝒆𝒗𝒆𝒍𝒐𝒑𝒆𝒓😎😎
          </small>
        </SwiperSlide>
        <SwiperSlide className='testimonials'>
          <div className='client_avatar'>
            <img src={AVTR3} alt='Avatar one' />
          </div>
          <h5 className='client_name'>Modesta</h5>
          <small className='client_review'>
            𝑰 𝒉𝒂𝒅 𝒌𝒏𝒐𝒘 𝑮𝒂𝒃𝒓𝒊𝒆𝒍 𝒘𝒊𝒕𝒉 𝒉𝒊𝒔 𝒂𝒎𝒂𝒛𝒊𝒏𝒈 𝒘𝒆𝒃𝒔𝒊𝒕𝒆 𝒅𝒆𝒔𝒊𝒈𝒏 𝑯𝒆 𝒊𝒔 𝒖𝒏𝒊𝒒𝒖𝒆 𝒘𝒉𝒆𝒏
            𝒊𝒕 𝒄𝒐𝒎𝒆𝒔 𝒕𝒐 𝒘𝒆𝒃𝒔𝒊𝒕𝒆 𝒅𝒆𝒗𝒆𝒍𝒐𝒑𝒎𝒆𝒏𝒕, 𝑲𝒖𝒅𝒐𝒔 𝒕𝒐 𝒕𝒉𝒆 𝒈𝒓𝒆𝒂𝒕 𝒅𝒆𝒗𝒆𝒍𝒐𝒑𝒆𝒓😎😎
          </small>
        </SwiperSlide>
        <SwiperSlide className='testimonials'>
          <div className='client_avatar'>
            <img src={AVTR4} alt='Avatar one' />
          </div>
          <h5 className='client_name'>Jacob</h5>
          <small className='client_review'>
            𝑾𝒐𝒘, 𝑻𝒉𝒊𝒔 𝒔𝒊𝒕𝒆 𝒊𝒔 𝒆𝒙𝒕𝒓𝒆𝒎𝒆𝒍𝒚 𝒈𝒓𝒆𝒂𝒕, 𝑮𝒂𝒃𝒓𝒊𝒆𝒍 𝒉𝒂𝒔 𝒃𝒆𝒆𝒏 𝒅𝒐𝒊𝒏𝒈 𝒘𝒆𝒍𝒍 𝒊𝒏
            𝒘𝒆𝒃𝒔𝒊𝒕𝒆 𝒄𝒓𝒆𝒂𝒕𝒊𝒐𝒏 𝒘𝒊𝒕𝒉 𝒂𝒎𝒂𝒛𝒊𝒏𝒈 𝒄𝒐𝒏𝒄𝒆𝒑𝒕 𝒇𝒐𝒓 𝒄𝒍𝒊𝒆𝒏𝒕 𝒇𝒓𝒊𝒆𝒏𝒅𝒍𝒚 𝒂𝒏𝒅 𝒕𝒉𝒆
            𝒍𝒊𝒌𝒆, 𝑻𝒉𝒖𝒎𝒃𝒔 𝒕𝒐 𝒚𝒐𝒖 𝑮𝒂𝒃𝒓𝒊𝒆𝒍😎
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonial
