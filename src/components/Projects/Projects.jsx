import React from 'react';
import './Projects.css';
import github from '../../assets/real_github.png';
import { motion } from  'framer-motion';
import { fadeIn } from '../utils/motion';
import { projects } from '../constants/'
import { Tilt } from 'react-tilt';

function Projects({index, name, description, tags, image, source_code_link}) {
  return (
    <section className="project__container">
        <div className="tilt">
            <div className="showcase">
                <img src={image} alt={name} className='project-image' />
            </div>
            <div className="project-info">
                <h3 className='project-name'>{name}</h3>
                <p className='project-desc'>{description}</p>
            </div>
        </div>
    </section>
  )
}

function Works() {
    return (
        <section className="works">
            <h2 className="my-projects">
                PROJECTS
            </h2>
            <div className='project-wrapper'>
                {projects.map((projects, index) => (
                    <Projects
                        key={`project-${index}`}
                        index={index}
                    {...projects}
                    />
                ))}
            </div>
        </section>
    )
}

export default Works;