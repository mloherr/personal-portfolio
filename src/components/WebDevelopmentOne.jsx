import '../scss/components/WebDevelopmentOne.scss';
import leftArrow from '../images/left-arrow.svg';
import righttArrow from '../images/right-arrow.svg';
import react from '../images/react.svg';
import node from '../images/node.svg';
import sass from '../images/sass.svg';
import mysql from '../images/mysql.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function WebDevelopmentOne() {
  const [index, setIndex] = useState(0);
  const images = [
    '/src/images/MockupWebGroupOne.png',
    '/src/images/MockupWebGroupTwo.png',
    '/src/images/MockupWebGroupThree.png',
  ];

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
          <div
            className="carruselDevelopment__mainPicture"
            style={{ backgroundImage: `url(${images[index]})` }}
          ></div>
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
            <img src={react} alt="" />
            <img src={node} alt="" />
            <img src={sass} alt="" />
            <img src={mysql} alt="" />
          </div>

          <a
            href="https://choripopins-project.onrender.com/"
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
