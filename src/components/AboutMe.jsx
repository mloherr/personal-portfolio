import '../scss/components/AboutMe.scss';
import '../scss/core/variables.scss';
import { Link } from 'react-router-dom';
function AboutMe() {
  return (
    <Link to="/about-me">
      <section className="aboutMe">
        <div className="aboutMe__decoration ">
          <div className="aboutMe__decoration--circle"></div>
        </div>
      </section>
    </Link>
  );
}

export default AboutMe;
