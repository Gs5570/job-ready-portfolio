import { useState } from 'react';
import { projects } from '../data/data.js';

//icons
import { IoLogoJavascript } from 'react-icons/io5';
import { FaAngular, FaReact, FaHtml5, FaCss3, FaNodeJs } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';

//style
import '../styles/Projects.css';

export default function Projects() {
  const [projectsData, setProjectsData] = useState(projects);
  console.log(projectsData);
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      {projectsData.map((project) => {
        return (
          <div key={project.id} className="project-sample-container">
            <div className="project-enclosure">
              <div className="image-container">
                <img src={project.image} />
              </div>

              <div className="project-details-container">
                <h2>{project.Name}</h2>
                <div className="tech-icons-container">
                  {project.icons.map((icon, index) => {
                    const IconComponents = () => {
                      switch (icon) {
                        case 'FaAngular':
                          return <FaAngular size={project.size} />;
                        case 'SiTypescript':
                          return <SiTypescript size={project.size} />;
                        case 'FaHtml5':
                          return <FaHtml5 size={project.size} />;
                        case 'FaCss3':
                          return <FaCss3 size={project.size} />;
                        case 'FaReact':
                          return <FaReact size={project.size} />;
                        case 'FaNodeJs':
                          return <FaNodeJs size={project.size} />;
                        case 'IoLogoJavascript':
                          return <IoLogoJavascript size={project.size} />;
                        default:
                          return null;
                      }
                    };
                    return <IconComponents key={index} />;
                  })}
                </div>
                <p>{project.Description}</p>
              </div>
            </div>
            <div className="projects-buttons-container">
              <button>Code</button>
              <button>Live</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
