import "../styles/error.css";
import { NavLink } from "react-router-dom";
import useTheme from "../theme/useTheme";

const Error = () => {
  const {themeStatus} = useTheme();
  
  return (
    <div className={themeStatus ? "container-dark-theme" : "container-light-theme"}>
      <div className="error-message-container">
        <p className={themeStatus ? "text-dark-2" : "text-light-2"}>This page cant't be found :c</p>
        <NavLink exact to="/">
          <button className={themeStatus ? "button-dark" : "button-light"}>Back to Home</button>
        </NavLink>  
      </div>   
    </div>
  )
};

export default Error