import CV from "../assets/CV/CV.pdf";
import { HashLink } from "react-router-hash-link";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Contact = () => {
  const {ref, inView} = useInView();
  const animation = useAnimation();
  const cvDiego = CV;

  useEffect(() => {
    if (inView) {
      animation.start({
        scale: 1,
        opacity: 1,
        transition: {
          type: "tween",
          duration: 1
        }
      });      
    }
  }, [inView, animation]);

  return (
    <section className="contact-background" id="contact">
      <div className="contact-main-container">
        <h2>CONTACT</h2>
        <motion.div 
          className="contact-container"
          ref={ref}
          initial={{scale: 2, opacity: 0}}
          animate={animation}
        >
          <h3>Let's talk!</h3>
          <div className="contact-sub-container-1">
            <div 
              className="contact-sub-container-2">
              <h4 >(52) 55 40 76 24 69</h4>
              <br/>
              <h4>diego.stonerough@gmail.com</h4>
              <br/>
              <h4>Estado de México, México</h4>
            </div>
            <div className="contact-sub-container-2">
              <a href={cvDiego} download target="blank">
                <button>Download CV</button>
              </a>
              <h3>OR</h3>
              <a
                href="https://api.whatsapp.com/send?phone=525540762469"
                target="blank"
              >
                <button>Send WhatsApp</button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="footer">
        <div className="logo-container"> 
        <HashLink to="#home">         
          <img src="https://i.imgur.com/8UF9Gkq.png" alt="logo" className="logo"/>
        </HashLink>
        </div>
      </div>
    </section>
  );
};

export default Contact;
