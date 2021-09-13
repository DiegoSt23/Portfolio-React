import "../styles/project.css";
import useTheme from "../theme/useTheme";

const ProjectContainer = ({ name, description, imgUrl, projectUrl }) => {
  const { themeStatus } = useTheme();
  return (
    <div className="project-container">
      <div className="project-info-container">
        <h2 className={themeStatus ? "text-dark" : "text-light"}>{name}</h2>
        <p className={themeStatus ? "text-dark-2" : "text-light-2"}>
          {description}
        </p>
      </div>
      <div className="project-image-container">
        <a href={projectUrl} target="blank">
          <img src={imgUrl} alt={name} className="image" />
          <div className={themeStatus ? "overlay-dark" : "overlay-light"}>
            OPEN
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProjectContainer;
