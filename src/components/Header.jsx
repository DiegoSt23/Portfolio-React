import "../styles/header.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faToggleOn, faToggleOff, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import useTheme from "../theme/useTheme";

const Header = () => {
  const {themeStatus, changeTheme} = useTheme();
  const [menuStatus, setMenuStatus] = useState(false)

  const openCloseMenu = () => {
    setMenuStatus(!menuStatus)
  };
  
  return (
    <div className="header">
      <div className="main-logo-container">
        <div className="logo-container">
          <NavLink to="/">
            <img src={themeStatus ? "https://i.imgur.com/8UF9Gkq.png" : "https://i.imgur.com/Mv6eSOR.png"} alt="logo" className="logo"/>
          </NavLink>
        </div>
        <div className="menu-container">       
          {themeStatus
            ? <FontAwesomeIcon icon={faToggleOn} className="theme-changer-icon-dark2" onClick={() => {changeTheme()}} />
            : <FontAwesomeIcon icon={faToggleOff} className="theme-changer-icon-light2" onClick={() => {changeTheme()}} />
          }
          {menuStatus
            ? <FontAwesomeIcon icon={faTimes} className="menu-icon" style={{color: themeStatus ? "rgb(2, 218, 200)" : "red"}} onClick={openCloseMenu} />
            : <FontAwesomeIcon icon={faBars} className="menu-icon" style={{color: themeStatus ? "rgb(2, 218, 200)" : "red"}} onClick={openCloseMenu} />
          }
        </div>               
      </div>
      <div className="nav-bar">
        {themeStatus
          ? <FontAwesomeIcon icon={faToggleOn} className="theme-changer-icon-dark" onClick={() => {changeTheme()}} />
          : <FontAwesomeIcon icon={faToggleOff} className="theme-changer-icon-light" onClick={() => {changeTheme()}} />
        }
        <NavLink exact to="/" activeClassName={themeStatus ? "selected-dark" : "selected-light"} className="option"><h6>Home</h6></NavLink>
        <NavLink to="/about" activeClassName={themeStatus ? "selected-dark" : "selected-light"} className="option"><h6>About</h6></NavLink>
        <NavLink to="/services" activeClassName={themeStatus ? "selected-dark" : "selected-light"} className="option"><h6>Services</h6></NavLink>
        <NavLink to="/gallery" activeClassName={themeStatus ? "selected-dark" : "selected-light"} className="option"><h6>Gallery</h6></NavLink>
        <NavLink to="/contact" activeClassName={themeStatus ? "selected-dark" : "selected-light"}className="option"><h6>Contact</h6></NavLink>        
      </div>
      <div className="nav-bar2" style={{display: menuStatus ? "block" : "none"}}>
      <NavLink exact to="/" activeClassName={themeStatus ? "selected-dark" : "selected-light"} className="option"><h6 onClick={openCloseMenu}>Home</h6></NavLink>
        <NavLink to="/about" activeClassName={themeStatus ? "selected-dark" : "selected-light"} className="option"><h6 onClick={openCloseMenu}>About</h6></NavLink>
        <NavLink to="/services" activeClassName={themeStatus ? "selected-dark" : "selected-light"} className="option"><h6 onClick={openCloseMenu}>Services</h6></NavLink>
        <NavLink to="/gallery" activeClassName={themeStatus ? "selected-dark" : "selected-light"} className="option"><h6 onClick={openCloseMenu}>Gallery</h6></NavLink>
        <NavLink to="/contact" activeClassName={themeStatus ? "selected-dark" : "selected-light"} className="option"><h6 onClick={openCloseMenu}>Contact</h6></NavLink>
      </div>
    </div>
  )
};

export default Header