import React from 'react'
import './Contact.css'
import { MdOutlineMail } from 'react-icons/md'
import { AiFillLinkedin } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_wqplbjb',
      'template_oa49b59',
      form.current,
      'BME6PvLhRCIp2oSvQ'
    )
    e.target.reset()
  }
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineMail className='contact_option_icon' />
            <h4>Email</h4>
            <h5>Kirchoff200@gmail.com</h5>
            <a href='mailto:kirchoff200@gmail.com'>Send a message</a>
          </article>
          <article className='contact_option'>
            <AiFillLinkedin className='contact_option_icon' />
            <h4>Linkedin</h4>
            <h5>Anyaele Gabriel</h5>
            <a href='https://www.linkedin.com/in/gabriel-chima2021'>
              Send a message
            </a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp className='contact_option_icon' />
            <h4>Whatsapp</h4>
            <h5>+2349034128595</h5>
            <a href='https://api.whatsapp.com/send?/phone=+2349034128595'>
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            name='name'
            placeholder='Your Full Name'
            required
          />
          <input type='text' email='email' placeholder='Your Email' required />
          <textarea
            name='message'
            cols='30'
            rows='7'
            placeholder='Your Message'
            required
          ></textarea>
          <button type='submit' className='btn btn-primary'>
            Send a Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
