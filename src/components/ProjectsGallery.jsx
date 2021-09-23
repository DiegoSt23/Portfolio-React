import "../styles/gallery.css";
import { useState } from "react";
import useTheme from "../theme/useTheme";
import Data from "../Projects.json";
import ProjectContainer from "./ProjectContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const ProjectsGallery = () => {
  const { themeStatus } = useTheme();
  const projects = Data.projects;
  const [slice1, setSlice1] = useState(0);
  const [slice2, setSlice2] = useState(1);

  const list = projects.map((item) => (
    <ProjectContainer
      key={item.id}
      name={item.name}
      description={item.description}
      imgUrl={item.imageUrl}
      projectUrl={item.projectUrl}
    />
  ));

  const next = () => {
    if (slice1 === 5 && slice2 === 6) {
      setSlice1(0);
      setSlice2(1);
    } else {
      setSlice1((prevState) => prevState + 1);
      setSlice2((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (slice1 === 0 && slice2 === 1) {
      setSlice1(5);
      setSlice2(6);
    } else {
      setSlice1((prevState) => prevState - 1);
      setSlice2((prevState) => prevState - 1);
    }
  };

  return (
    <div
      className={themeStatus ? "container-dark-theme" : "container-light-theme"}
    >
      <div className="gallery-container">
        <div className="nav-buttons-container">
          <FontAwesomeIcon
            icon={faChevronLeft}
            onClick={prev}
            className={themeStatus ? "icon-dark" : "icon-light"}
          />
        </div>
        <div
          className={
            themeStatus ? "gallery-container-dark" : "gallery-container-light"
          }
        >
          {list.slice(slice1, slice2)}
        </div>
        <div className="nav-buttons-container">
          <FontAwesomeIcon
            icon={faChevronRight}
            onClick={next}
            className={themeStatus ? "icon-dark" : "icon-light"}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsGallery;
