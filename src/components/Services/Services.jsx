import React from 'react'
import './Services.css'
import { BsCheck } from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services_container'>
        <article className='service'>
          <div className='service_head'>
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BsCheck className='service_list-icon' />
              <p>
                Illustrate design ideas using storyboards, process flows and
                sitemaps .
              </p>
            </li>
            <li>
              <BsCheck className='service_list-icon' />
              <p>
                Design graphic user interface elements, like menus, tabs and
                widgets.
              </p>
            </li>
            <li>
              <BsCheck className='service_list-icon' />
              <p>Build page navigation buttons and search fields.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon' />
              <p>
                Develop UI mockups and prototypes that clearly illustrate how
                sites function and look like.
              </p>
            </li>
            <li>
              <BsCheck className='service_list-icon' />
              <p>
                Create original graphic designs (e.g. images, sketches and
                tables).
              </p>
            </li>
            <li>
              <BsCheck className='service_list-icon' />
              <p>
                Identify and troubleshoot UX problems (e.g. responsiveness).
              </p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service_head'>
            <h3>Web development</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BsCheck className='service_list-icon' />
              <p>Designing user interfaces and navigation menus.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon' />
              <p>
                Writing and reviewing code for sites, typically HTML, XML, or
                JavaScript.
              </p>
            </li>
            <li>
              <BsCheck className='service_list-icon' />
              <p>Integrating multimedia content onto a site.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon' />
              <p>Testing web applications.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon' />
              <p>
                Troubleshooting problems with performance or user experience.
              </p>
            </li>
            <li>
              <BsCheck className='service_list-icon' />
              <p>Collaborating with designers, developers, and stakeholders.</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service_head'>
            <h3>Content Creator</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BsCheck className='service_list-icon' />
              <p>Research industry-related topics.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon' />
              <p>
                Create and distribute marketing copy to advertise our company
                and products.
              </p>
            </li>
            <li>
              <BsCheck className='service_list-icon' />
              <p>Edit and proofread written pieces before publication.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon' />
              <p>
                Conduct keyword research and use SEO guidelines to optimize
                content.
              </p>
            </li>
            <li>
              <BsCheck className='service_list-icon' />
              <p>Identify customers’ needs and recommend new topics.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon' />
              <p>
                Measure web traffic to content (e.g. conversion and bounce
                rates).
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
