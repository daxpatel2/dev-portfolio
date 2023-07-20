import React from "react";
import "./Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { projects } from "../constants/";
import twitterGif from "../../assets/twitter.gif";
import trelloGif from "../../assets/trello.gif";
import fileGif from "../../assets/file.gif";

const twitterTech = ["React", "CSS", "Firebase"];

const hackBank = ["NextJS", "Tailwind CSS", "Express", "Firebase"];

const File_System = ["C", "Linux", "Bash"];

function Projects({ name, description, gif, tags, source_code_link }) {
  return (
    <section className="project__container" id="projects">
      <div className="image-video">
        <img src={gif} alt="image" />
        {/* <video width="500" height="350" controls className="video">
          <source src={video} type="video/mp4" />
        </video> */}
      </div>
      <div className="about">
        <div className="project-hero">
          <p className="featured">Featured</p>
          <a href={source_code_link} target="_blank" className="link">
            {name}
          </a>
        </div>
        <div className="about_text">
          <p>{description}</p>
        </div>
        <div className="more">
          <div className="tech-tech">
            {tags?.map((technology) => (
              <li className="listy" key={technology}>
                {technology}
              </li>
            ))}
          </div>
          <a
            href={source_code_link}
            className="source-link"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faCode} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Works() {
  return (
    <section className="works">
      <h2 className="my-projects">PROJECTS</h2>
      <div className="project-wrapper">
        <Projects
          name={projects[0].name}
          description={projects[0].description}
          tags={twitterTech}
          gif={twitterGif}
          source_code_link={projects[0].source_code_link}
        />
        <Projects
          name={projects[1].name}
          description={projects[1].description}
          tags={hackBank}
          gif={trelloGif}
          source_code_link={projects[1].source_code_link}
        />
        <Projects
          name={projects[2].name}
          description={projects[2].description}
          tags={File_System}
          gif={fileGif}
          source_code_link={projects[2].source_code_link}
        />
      </div>
      <p className="archive">ALL PROJECTS</p>
      <a className="view-arc" href="/archive">
        View Archive
      </a>
    </section>
  );
}

export default Works;
