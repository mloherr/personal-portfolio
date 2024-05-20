import '../scss/components/WebDevelopmentTwo.scss';
import leftArrow from '../images/left-arrow.svg';
import righttArrow from '../images/right-arrow.svg';
import react from '../images/react.svg';
import node from '../images/node.svg';
import sass from '../images/sass.svg';
import mysql from '../images/mysql.svg';
import lupa from '../images/lupa.svg';
import haikus1 from '../images/mockupPCHaikusOne.webp';
import haikus2 from '../images/mockupPCHaikusTwo.webp';
import haikus3 from '../images/mockupMobHaiku.webp';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

function WebDevelopmentOne() {
  const [index, setIndex] = useState(0);
  const images = [haikus1, haikus2, haikus3];

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
        <div className="carruselDevelopmentTwo">
          <Zoom>
            <div
              role="img"
              className="carruselDevelopmentTwo__mainPicture"
              style={{ backgroundImage: `url(${images[index]})` }}
            >
              <img
                className="carruselDevelopmentTwo__mainPicture--zoom"
                src={lupa}
                alt="Icon for lens"
              />
            </div>
          </Zoom>
          <div className="carruselDevelopmentTwo__smallPicture">
            <figure
              className="carruselDevelopmentTwo__smallPicture--arrowLeft"
              onClick={handleClickPrevious}
            >
              <img src={leftArrow} alt="Icon of a left arrow" />
            </figure>

            <div className="carruselDevelopmentTwo__smallPicture--one"></div>
            <div className="carruselDevelopmentTwo__smallPicture--two"></div>
            <div className="carruselDevelopmentTwo__smallPicture--three"></div>
            <figure
              className="carruselDevelopmentTwo__smallPicture--arrowRight"
              onClick={handleClickNext}
            >
              <img src={righttArrow} alt="Icon of a right arrow" />
            </figure>
          </div>
        </div>
        <div className="infoSectionDevelopment">
          <h1 className="infoSectionDevelopment__title">Haiku Generator</h1>
          <p className="infoSectionDevelopment__description">
            Proyecto personal de una Web App para generar haikus de forma
            aleatoria donde se ha desarrollado tanto el front como el back-end.
          </p>

          <div className="infoSectionDevelopment__techonologies">
            <img src={react} alt="React logotipe" />
            <img src={node} alt="NodeJS logotipe" />
            <img src={sass} alt="Sass logotipe" />
            <img src={mysql} alt="Mysql logotipe" />
          </div>

          <a
            href="https://haiku-generator.onrender.com/"
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
        <Link to="/web-development-1" className="otherProjects__left">
          <img src={leftArrow} alt="" />
        </Link>
        <Link to="/web-development-3" className="otherProjects__right">
          <img src={righttArrow} alt="" />
        </Link>
      </div>
    </section>
  );
}

export default WebDevelopmentOne;
