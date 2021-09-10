import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin, faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";
import useTheme from "../theme/useTheme";

const About = () => {
  const {themeStatus} = useTheme();

  return (
    <div className={themeStatus ? "container-dark-theme" : "container-light-theme"}>
      <div className="about-container">
        <div className="about-sub-container">
          <img src="https://i.imgur.com/N8NavXO.jpg" alt="me" className="picture" />
        </div>
        <div className="about-sub-container">
          <h2 className={themeStatus ? "text-dark" : "text-light"}>Hi!</h2>
          <p className={themeStatus ? "text-dark-2" : "text-light-2"}>
            I'm Diego, a 31 year old Front-End Developer from México, 
            currently studying in <a href="https://www.academlo.com/" target="blank" className={themeStatus ? "text-dark" : "text-light"}>Academlo</a> for Full-Stack Developer. 
          </p>
          <p className={themeStatus ? "text-dark-2" : "text-light-2"}>
            I have skills using HTML, CSS, JavaScript and React with Hooks, Context, Router and Redux, 
            you can find some of my projects in the gallery section.
          </p>
          <p className={themeStatus ? "text-dark-2" : "text-light-2"}>
            Also I'm passionate about team work, some design (not professional) and a lot of coffee and music.
          </p>
          <div className="icons-container">
            <a href="https://www.linkedin.com/in/diego-%C3%A1lvarez-garc%C3%ADa/" target="blank" className={themeStatus ? "icon-dark" : "icon-light"}>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/DiegoSt23" target="blank" className={themeStatus ? "icon-dark" : "icon-light"}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100069878761209" target="blank" className={themeStatus ? "icon-dark" : "icon-light"}>
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
};

export default About