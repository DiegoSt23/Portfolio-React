import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faGit, faHtml5, faCss3Alt, faJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { faCode, faLaptopCode, faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import useTheme from "../theme/useTheme";


const Services = () => {
  const {themeStatus} = useTheme();

  return (
    <div className={themeStatus ? "container-dark-theme" : "container-light-theme"}>
      <div className="services-container">
      <h2 className={themeStatus ? "text-dark" : "text-light"}>SERVICES</h2>
        <div className="services-sub-container" >
          <div className="services-sub-container2">
            <FontAwesomeIcon icon={faCode} className={themeStatus ? "icon-dark-2" : "icon-light-2"}/>
            <h3>Web Development</h3>
            <p className={themeStatus ? "text-dark-2" : "text-light-2"}>Creation of dynamic Web pages using HTML, CSS, JavaScript and React, interaction with APIs.</p>
          </div>
          <div className="services-sub-container2">
            <FontAwesomeIcon icon={faLaptopCode} className={themeStatus ? "icon-dark-2" : "icon-light-2"}/>
            <h3>Web Design</h3>
            <p className={themeStatus ? "text-dark-2" : "text-light-2"}>Creation of dynamic Web pages using HTML, CSS, JavaScript and React, interaction with APIs.</p>
          </div>
          <div className="services-sub-container2">
            <FontAwesomeIcon icon={faCodeBranch} className={themeStatus ? "icon-dark-2" : "icon-light-2"}/>
            <h3>Code Branch</h3>
            <p className={themeStatus ? "text-dark-2" : "text-light-2"}>Creation of dynamic Web pages using HTML, CSS, JavaScript and React, interaction with APIs.</p>
          </div>
        </div>
        <div className="icons-container">
        <FontAwesomeIcon icon={faHtml5} className={themeStatus ? "icon-dark-2" : "icon-light-2"}/>
        <FontAwesomeIcon icon={faCss3Alt} className={themeStatus ? "icon-dark-2" : "icon-light-2"}/>
        <FontAwesomeIcon icon={faJs} className={themeStatus ? "icon-dark-2" : "icon-light-2"}/>
        <FontAwesomeIcon icon={faReact} className={themeStatus ? "icon-dark-2" : "icon-light-2"}/>
        <FontAwesomeIcon icon={faGit} className={themeStatus ? "icon-dark-2" : "icon-light-2"}/>
        </div>
      </div>
    </div>
  )
};

export default Services