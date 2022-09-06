import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assest/portfolio1.jpg'
import IMG2 from '../../assest/portfolio2.jpg'
import IMG3 from '../../assest/portfolio3.jpg'
import IMG4 from '../../assest/portfolio4.jpg'
import IMG5 from '../../assest/portfolio5.png'
import IMG6 from '../../assest/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Crypto Currency Dashboard and Financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/19241054-Orion-UI-kit-Charts-templates-infographics-in-Figma',
  },

  {
    id: 2,
    image: IMG2,
    title: 'Charts templates & infographics in figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/19241118-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps',
  },

  {
    id: 3,
    image: IMG3,
    title: 'Figma dashboard UI kit for data design web app',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/19241101-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps',
  },

  {
    id: 4,
    image: IMG4,
    title: 'Maintaining task and tracking process ',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/19241050-Orion-UI-kit-Charts-templates-infographics-in-Figma',
  },

  {
    id: 5,
    image: IMG5,
    title: 'Charts templates & infographics in figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/19241094-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Charts templates & infographics in figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/19241041-Orion-UI-kit-Charts-templates-infographics-in-Figma',
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent works</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio_container'>
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className='portfolio-item'>
              <div className='portfolio_item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio_item-cta'>
                <a href={github} className='btn' target='_blank'>
                  Github
                </a>
                <a href={demo} className='btn btn-primary' target='_blank'>
                  Live Demo
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio
