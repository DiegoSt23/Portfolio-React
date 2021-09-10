import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import useTheme from "../theme/useTheme";

const Header = () => {
  const {themeStatus, changeTheme} = useTheme();
  
  return (
    <div className={themeStatus ? "header-dark" : "header-light"}>
      <div className="logo-container">
        <NavLink to="/home">
          <img src={themeStatus ? "https://i.imgur.com/8UF9Gkq.png" : "https://i.imgur.com/9gdr4rO.png"} alt="logo" className="logo"/>
        </NavLink>        
      </div>
      <div className="nav-bar">
        {/* {theme.themeStatus
        ? <FontAwesomeIcon icon={faBars} className="theme-changer-icon-dark" />
        : <FontAwesomeIcon icon={faBars} className="theme-changer-icon-light" />
        } */}
        {themeStatus
        ? <FontAwesomeIcon icon={faToggleOn} className="theme-changer-icon-dark" onClick={() => {changeTheme()}} />
        : <FontAwesomeIcon icon={faToggleOff} className="theme-changer-icon-light" onClick={() => {changeTheme()}} />
        }
        <NavLink exact to="/" activeClassName={themeStatus ? "selected1" : "selected2"} className="option"><h6>Home</h6></NavLink>
        <NavLink to="/about" activeClassName={themeStatus ? "selected1" : "selected2"} className="option"><h6>About</h6></NavLink>
        <NavLink to="/services" activeClassName={themeStatus ? "selected1" : "selected2"} className="option"><h6>Services</h6></NavLink>
        <NavLink to="/gallery" activeClassName={themeStatus ? "selected1" : "selected2"} className="option"><h6>Gallery</h6></NavLink>
        <NavLink to="/contact" activeClassName={themeStatus ? "selected1" : "selected2"} className="option"><h6>Contact</h6></NavLink>        
      </div>
    </div>
  )
};

export default Header