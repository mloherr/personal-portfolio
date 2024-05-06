import '../scss/components/AboutMe.scss';
import '../scss/core/variables.scss';
import { Link } from 'react-router-dom';
function AboutMe() {
  return (
    <section className="aboutMe">
      <div className="aboutMe__decoration ">
        <Link to="/about-me">
          <div className="aboutMe__decoration--circle"></div>
        </Link>
      </div>
      <div className="aboutMe__text">
        <h2 className="aboutMe__text--subtitle">Hello, world!</h2>
        <p className="aboutMe__text--text">
          Soy María: desarrolladora junior fullstack y diseñadora UX/UI, con
          conocimientos sobre accesibilidad.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
