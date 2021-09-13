import "../styles/services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGit,
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faLaptopCode,
  faCodeBranch,
} from "@fortawesome/free-solid-svg-icons";
import useTheme from "../theme/useTheme";

const Services = () => {
  const { themeStatus } = useTheme();

  return (
    <div
      className={themeStatus ? "container-dark-theme" : "container-light-theme"}
    >
      <div className="services-container">
        <h2 className={themeStatus ? "text-dark" : "text-light"}>SKILLS</h2>
        <div className="services-sub-container">
          <div className="services-sub-container2">
            <FontAwesomeIcon
              icon={faCode}
              className={themeStatus ? "icon-dark-2" : "icon-light-2"}
            />
            <h3 className={themeStatus ? "text-dark-2" : "text-light-2"}>
              Web Development
            </h3>
            <p className={themeStatus ? "text-dark-2" : "text-light-2"}>
              Dynamic webpages and SPAs development with the use of HTML, CSS,
              JavaScript and React with Context, Hooks, Router. REST APIs
              consumption.
            </p>
          </div>
          <div className="services-sub-container2">
            <FontAwesomeIcon
              icon={faLaptopCode}
              className={themeStatus ? "icon-dark-2" : "icon-light-2"}
            />
            <h3 className={themeStatus ? "text-dark-2" : "text-light-2"}>
              Web Design
            </h3>
            <p className={themeStatus ? "text-dark-2" : "text-light-2"}>
              Web pages with responsive design, in other words, adaptable for
              different screen sizes to make them always look good and and easy
              to use.
            </p>
          </div>
          <div className="services-sub-container2">
            <FontAwesomeIcon
              icon={faCodeBranch}
              className={themeStatus ? "icon-dark-2" : "icon-light-2"}
            />
            <h3 className={themeStatus ? "text-dark-2" : "text-light-2"}>
              Code Branching
            </h3>
            <p className={themeStatus ? "text-dark-2" : "text-light-2"}>
              Managament of code branching with the use of Git which allows to
              teamwork without impacting other developers.
            </p>
          </div>
        </div>
        <div className="icons-container">
          <FontAwesomeIcon
            icon={faHtml5}
            className={themeStatus ? "icon-dark-2" : "icon-light-2"}
          />
          <FontAwesomeIcon
            icon={faCss3Alt}
            className={themeStatus ? "icon-dark-2" : "icon-light-2"}
          />
          <FontAwesomeIcon
            icon={faJs}
            className={themeStatus ? "icon-dark-2" : "icon-light-2"}
          />
          <FontAwesomeIcon
            icon={faReact}
            className={themeStatus ? "icon-dark-2" : "icon-light-2"}
          />
          <FontAwesomeIcon
            icon={faGit}
            className={themeStatus ? "icon-dark-2" : "icon-light-2"}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
