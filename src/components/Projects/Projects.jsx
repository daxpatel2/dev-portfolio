import React from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { projects } from '../constants/';

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

function Projects({name, description, tags, image, source_code_link}) {
  return (
    <section className="project__container">
        <div className="image">
            <video width="500" height="350" controls className='video'>
                <source src={image} type="video/mp4"/>
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
                        <li className='listy' key={technology}>{technology}</li>
                    ))}
                </div>
                <a href={source_code_link} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faCode} /></a>
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
                <Projects
                    name={projects[0].name}
                    description={projects[0].description}
                    tags={twitterTech}
                    image={projects[0].image}
                    source_code_link={projects[0].source_code_link}
                />
                <Projects
                    name={projects[1].name}
                    description={projects[1].description}
                    tags={twitterTech}
                    image={projects[1].image}
                    source_code_link={projects[1].source_code_link}
                />
                <Projects
                    name={projects[2].name}
                    description={projects[2].description}
                    tags={twitterTech}
                    image={projects[2].image}
                    source_code_link={projects[2].source_code_link}
                />
            </div>
        </section>
    )
}

export default Works;