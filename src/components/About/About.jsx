import React from 'react'
import './about.css'
import Tech from './Tech'
import code from '../../assets/code-white.jpg'

export const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about__container container grid">
        <img src={code} className="about__img" alt='img' />
        <div className="about__data">
          <h2 className="section__titless">ABOUT</h2>
          <br/>
          <p className="about__description">
          As my journey as a computer science major continues, I am constiently experimenting with new technologies. I aim to build upon my current back-end knowledge and combine it with my front-end skills, working towards becoming a full-stack developer. I am committed to explore and experiment with technologies in pursuit of building seamless and engaging user experiences.
          </p>
          <br/>
          <p className="tech">
            Technologies I'm profecient in:
          </p>
          <ul className='ultra'>
            <li>
              React
            </li>
            <li>
              JavaScript
            </li>
            <li>
              Java
            </li>
            <li>
              Python
            </li>
            <li>
              SQL
            </li>
            <li>
              C
            </li>
          </ul>
        </div>
      </div>
      <br/>
      <br/>
      <Tech />
    </section>
  )
}

export default About;
