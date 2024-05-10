import '../scss/components/WebDevelopmentOne.scss';
import leftArrow from '../images/left-arrow.svg';
import righttArrow from '../images/right-arrow.svg';
import react from '../images/react.svg';
import node from '../images/node.svg';
import sass from '../images/sass.svg';
import mysql from '../images/mysql.svg';
import lupa from '../images/lupa.svg';
import webGroup1 from '../images/MockupWebGroupOne.png';
import webGroup2 from '../images/MockupWebGroupTwo.png';
import webGroup3 from '../images/MockupWebGroupThree.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

function WebDevelopmentOne() {
  const [index, setIndex] = useState(0);
  const images = [webGroup1, webGroup2, webGroup3];

  const [isOnVisible, setIsOnVisible] = useState(false);
  const handleClickNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleClickPrevious = () => {
    if (index === 0) {
      setIndex(images.length - 1);
    } else {
      setIndex((prevIndex) => (prevIndex - 1) % images.length);
    }
  };

  const handleOnClick = () => {
    setIsOnVisible(!isOnVisible);
  };
  return (
    <section className="webDevelopmentsection">
      <div className="webDevelopmentsection__itemsContainer">
        <div className="carruselDevelopment">
          <Zoom>
            <div
              role="img"
              className="carruselDevelopment__mainPicture"
              style={{ backgroundImage: `url(${images[index]})` }}
            >
              <img
                className="carruselDevelopment__mainPicture--zoom"
                src={lupa}
                alt="Icon for lens"
              />
            </div>
          </Zoom>
          <div className="carruselDevelopment__smallPicture">
            <figure
              className="carruselDevelopment__smallPicture--arrowLeft"
              onClick={handleClickPrevious}
            >
              <img src={leftArrow} alt="Icon of a left arrow" />
            </figure>

            <div className="carruselDevelopment__smallPicture--one"></div>
            <div className="carruselDevelopment__smallPicture--two"></div>
            <div className="carruselDevelopment__smallPicture--three"></div>
            <figure
              className="carruselDevelopment__smallPicture--arrowRight"
              onClick={handleClickNext}
            >
              <img src={righttArrow} alt="Icon of a right arrow" />
            </figure>
          </div>
        </div>
        <div className="infoSectionDevelopment">
          <h1 className="infoSectionDevelopment__title">
            Choripoppins Projects
          </h1>
          <p className="infoSectionDevelopment__description">
            Proyecto grupal de una Web App para crear tarjetas de presentación
            de proyectos personales donde se ha desarrollado tanto el front como
            el back-end.
          </p>

          <div className="infoSectionDevelopment__techonologies">
            <img src={react} alt="React logotipe" />
            <img src={node} alt="NodeJS logotipe" />
            <img src={sass} alt="Sass logotipe" />
            <img src={mysql} alt="Mysql logotipe" />
          </div>

          <a
            href="https://choripopins-project.onrender.com/"
            target="_blank"
            className={
              isOnVisible
                ? 'infoSectionDevelopment__buttonOn'
                : 'infoSectionDevelopment__buttonOff'
            }
            onClick={handleOnClick}
          >
            Ver proyecto
          </a>
        </div>
      </div>
      <div className="otherProjects">
        <Link to="/web-development-2">
          <img className="otherProjects__left" src={leftArrow} alt="" />
        </Link>
        <Link to="/web-development-2">
          <img className="otherProjects__right" src={righttArrow} alt="" />
        </Link>
      </div>
    </section>
  );
}

export default WebDevelopmentOne;
