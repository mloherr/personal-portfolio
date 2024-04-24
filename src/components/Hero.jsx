import '../scss/components/Hero.scss';
import '../scss/core/variables.scss';
import linkedin from '../images/linkedin.svg';
import github from '../images/github.svg';
import instagram from '../images/instagram.svg';
import { useState } from 'react';

function Hero() {
  const [isOnVisibleLinkedin, setIsOnVisibleLinkedin] = useState(false);
  const [isOnVisibleGithub, setIsOnVisibleGithub] = useState(false);
  const [isOnVisibleInstagram, setIsOnVisibleInstagram] = useState(false);

  const handleClickLinkedin = () => {
    setIsOnVisibleLinkedin(!isOnVisibleLinkedin);
  };
  const handleClickGithub = () => {
    setIsOnVisibleGithub(!isOnVisibleGithub);
  };
  const handleClickInstagram = () => {
    setIsOnVisibleInstagram(!isOnVisibleInstagram);
  };
  return (
    <section className="hero">
      <div className="hero__image"></div>
      <h1 className="hero__title">
        Junior Full Stack Developer & UX/UI Graphic Designer
      </h1>
      <h2 className="hero__subtitle">Hello, world!</h2>
      <p className="hero__text">
        Soy María: desarrolladora junior fullstack y diseñadora UX/UI, con
        conocimientos sobre accesibilidad.
      </p>
      <div className="hero__buttons">
        <a
          href="www.linkedin.com/in/maría-lópez-herráiz"
          className={
            isOnVisibleLinkedin
              ? 'hero__buttons--buttonOn'
              : 'hero__buttons--buttonOff'
          }
          onClick={handleClickLinkedin}
        >
          <img src={linkedin} alt="Linkedin logotipe" />
        </a>
        <a
          href="https://github.com/mloherr"
          className={
            isOnVisibleGithub
              ? 'hero__buttons--buttonOn'
              : 'hero__buttons--buttonOff'
          }
          onClick={handleClickGithub}
        >
          <img src={github} alt="Github logotipe" />
        </a>
        <a
          href="https://www.instagram.com/marialoherr?igsh=MTYyZnR5Ym16Zjk5Mg=="
          className={
            isOnVisibleInstagram
              ? 'hero__buttons--buttonOn'
              : 'hero__buttons--buttonOff'
          }
          onClick={handleClickInstagram}
        >
          <img src={instagram} alt="Instagram logotipe" />
        </a>
      </div>
    </section>
  );
}

export default Hero;
