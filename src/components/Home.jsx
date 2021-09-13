import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import ProjectsGallery from "./ProjectsGallery";
import Contact from "./Contact";
import Error from "./Error";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const [loaderState, setLoaderState] = useState(true);

  setTimeout(() => {
    setLoaderState(false);
  }, 3000);

  return (
    <div className="main-container">
      {loaderState ? (
        <div className="container-dark-theme">
          <div className="preloader"></div>
        </div>
      ) : (
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Hero} />
            <Route exact path="/about" component={About} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/gallery" component={ProjectsGallery} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="*" component={Error} />
          </Switch>
        </Router>
      )}
    </div>
  );
};

export default Home;
