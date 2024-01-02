//icons
import { FaLinkedin, FaReact, FaHtml5, FaCss3 } from 'react-icons/fa';
import { IoLogoGithub } from 'react-icons/io';
import { IoLogoJavascript } from 'react-icons/io5';
import { LiaFileDownloadSolid } from 'react-icons/lia';

//styles
import '../styles/Intro.css';

import Flag from '../assets/dr congo flag.jpeg';

export default function Intro() {
  return (
    <div className="home-container">
      <h1>Welcome </h1>
      <div className="intro-container">
        <div>
          <img src={Flag} alt="dr cong flag" />
        </div>
        <div className="overview">
          <h2>Software Engineer</h2>
          <p>
            Hi im Galekwan Sango. A passionate web developer with a background
            Cyber Security. My expertise stem from developing, implementing,
            testing, and deploying web applications.
          </p>
          <div className="social-container">
            <div className="social-item-container">
              <FaLinkedin size={40} className="social-item" />
              <p>LinkedIn</p>
            </div>
            <div className="social-item-container">
              <IoLogoGithub size={40} className="social-item" />
              <p>Github</p>
            </div>
            <div className="social-item-container">
              <LiaFileDownloadSolid size={40} className="social-item" />
              <p>Resume</p>
            </div>
          </div>
        </div>
      </div>
      <div className="tech-container">
        <p>Tech Stack: </p>
        <div className="icon-container">
          <FaHtml5 size={70} />
          <FaCss3 size={70} />
          <IoLogoJavascript size={70} />
          <FaReact size={70} />
        </div>
      </div>
    </div>
  );
}
