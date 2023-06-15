import React from 'react';
import './Projects.css';
import github from '../../assets/real_github.png';
import { motion } from  'framer-motion';
import { fadeIn } from '../utils/motion';
import { projects } from '../constants/'
import { Tilt } from 'react-tilt';

const twitterTech =[
    "React",
    "CSS",
    "Firebase"
]

const technologies2 = [
    "MongoDB",
    "Express",
    "React",
    "Node"
]

function Projects({index, name, description, tags, image, source_code_link}) {
  return (
    <section className="project__container">
        <div className="image">
            <video width="500" height="350" controls className='video'>
                <source src="../../assets/video.mp4" type="video/mp4"/>
            </video>
        </div>
        <div className="about">
            <div className="project-hero">
                <p className='featured'>Featured</p>
                <a href={source_code_link} target='_blank' className="link">{name}</a>
            </div>
            <div className="about_text">
                <p>{description}</p>
            </div>
            <div className="more">
                <div className="tech-tech">
                    {tags?.map((technology) => (
                        <li key={technology}>{technology}</li>
                    ))}
                </div>
                <a href={source_code_link} target='_blank' className="code icon">Code icon from font awesome</a>
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
                        tags={}
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