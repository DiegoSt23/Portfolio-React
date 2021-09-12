import "../styles/hero.css";
import useTheme from "../theme/useTheme";

const Hero = () => {
  const {themeStatus} = useTheme();

  return (
    <div className={themeStatus ? "container-dark-theme" : "container-light-theme"}>
        <div className={themeStatus ? "main-element-container-dark" : "main-element-container-light"}>
          <h2>Diego Alvarez</h2>
          <h1 className={themeStatus ? "text-dark" : "text-light"}>FRONT END DEVELOPER</h1>
        </div>       
    </div>
  )
};

export default Hero