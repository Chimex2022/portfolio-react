import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assest/portfolio1.png'
import IMG2 from '../../assest/portfolio2.png'
import IMG3 from '../../assest/portfolio3.png'
import IMG4 from '../../assest/portfolio4.png'
import IMG5 from '../../assest/portfolio5.png'
import IMG6 from '../../assest/portfolio6.png'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'E-commerce Shopping Cart',
    github: 'https://github.com/Chimex2022',
    demo: 'https://e-commerce-chimex2022.vercel.app/',
  },

  {
    id: 2,
    image: IMG2,
    title: 'E-commerce Prototype Shopping Website',
    github: 'https://github.com/Chimex2022',
    demo: 'https://prototype-ecommerce.vercel.app/',
  },

  {
    id: 3,
    image: IMG3,
    title: 'Socialbook Protype of Facebook',
    github: 'https://github.com/Chimex2022',
    demo: 'https://social-chat-silk.vercel.app/',
  },

  {
    id: 4,
    image: IMG4,
    title: 'Interview Question',
    github: 'https://github.com/Chimex2022',
    demo: 'https://interview-q.vercel.app/',
  },

  {
    id: 5,
    image: IMG5,
    title: 'WhichRide Application Website',
    github: 'https://github.com/Chimex2022',
    demo: 'https://which-ride-com.vercel.app/',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Todo App List',
    github: 'https://github.com/Chimex2022',
    demo: 'https://todo-app-nu-jet.vercel.app/',
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
