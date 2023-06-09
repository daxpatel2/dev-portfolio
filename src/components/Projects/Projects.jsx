import React from 'react';
import './Projects.css';
import github from '../../assets/real_github.png';
import { motion } from  'framer-motion';
import { fadeIn } from '../utils/motion';
import { projects } from '../constants/'
import { Tilt } from 'react-tilt';

function Projects({index, name, description, tags, image, source_code_link}) {
  return (
    <section className="tilt-div">
        <div className="tilt">
            <div className="real-image">
                <img src={image} alt={name} className='project-image' />
                <div className="git-icon">
                    <div className="click-icon" onClick={() => window.open(source_code_link,"_blank")}>
                        <img src={github} alt="github" className="github-logo" />
                    </div>
                </div>
            </div>
            <div className="project-info">
                <h3 className='project-name'>{name}</h3>
                <p className='project-desc'>{description}</p>
                <button className='buttons'>Check It Out</button>
            </div>
        </div>
    </section>
  )
}

function Works() {
    return (
        <section className="sections">
            <h2 className="my-projects">
                My Projects
            </h2>
            <p className="some-work">
                Creative work
            </p>
            <div className='nester'>
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