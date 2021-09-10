import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faToggleOn, faToggleOff, faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import useTheme from "../theme/useTheme";

const Header = () => {
  const theme = useTheme();
  
  return (
    <div className={theme.themeStatus ? "header-dark" : "header-light"}>
      <div className="logo-container">
        <NavLink to="/home">
          <img src={theme.themeStatus ? "https://i.imgur.com/8UF9Gkq.png" : "https://i.imgur.com/9gdr4rO.png"} alt="logo" className="logo"/>
        </NavLink>        
      </div>
      <div className="nav-bar">
        {/* {theme.themeStatus
        ? <FontAwesomeIcon icon={faBars} className="theme-changer-icon-dark" />
        : <FontAwesomeIcon icon={faBars} className="theme-changer-icon-light" />
        } */}
        {theme.themeStatus
        ? <FontAwesomeIcon icon={faToggleOn} className="theme-changer-icon-dark" onClick={() => {theme.changeTheme()}} />
        : <FontAwesomeIcon icon={faToggleOff} className="theme-changer-icon-light" onClick={() => {theme.changeTheme()}} />
        }
        <NavLink exact to="/" activeClassName={theme.themeStatus ? "selected1" : "selected2"} className="option"><h6>Home</h6></NavLink>
        <NavLink to="/about" activeClassName={theme.themeStatus ? "selected1" : "selected2"} className="option"><h6>About</h6></NavLink>
        <NavLink to="/services" activeClassName={theme.themeStatus ? "selected1" : "selected2"} className="option"><h6>Services</h6></NavLink>
        <NavLink to="/gallery" activeClassName={theme.themeStatus ? "selected1" : "selected2"} className="option"><h6>Gallery</h6></NavLink>
        <NavLink to="/contact" activeClassName={theme.themeStatus ? "selected1" : "selected2"} className="option"><h6>Contact</h6></NavLink>        
      </div>
    </div>
  )
};

export default Header