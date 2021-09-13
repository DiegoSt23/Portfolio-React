import "../styles/contact.css";
import useTheme from "../theme/useTheme";
import CV from "../CV/CV.pdf";

const Contact = () => {
  const cvDiego = CV;
  const { themeStatus } = useTheme();

  return (
    <div
      className={themeStatus ? "container-dark-theme" : "container-light-theme"}
    >
      <h2 className={themeStatus ? "text-dark" : "text-light"}>Let's talk!</h2>
      <div
        className={
          themeStatus ? "contact-container-dark" : "contact-container-light"
        }
      >
        <div className="contact-sub-container">
          <h4>(52) 55 40 76 24 69</h4>
          <h4>diego.stonerough@gmail.com</h4>
          <h4>Estado de México, México</h4>
        </div>
        <div className="contact-sub-container-2">
          <a href={cvDiego} download target="blank">
            <button className={themeStatus ? "button-dark" : "button-light"}>
              Download CV
            </button>
          </a>
          <h3 className={themeStatus ? "text-dark-2" : "text-light-2"}>OR</h3>
          <a
            href="https://api.whatsapp.com/send?phone=525540762469"
            target="blank"
          >
            <button className={themeStatus ? "button-dark" : "button-light"}>
              Send WhatsApp
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
