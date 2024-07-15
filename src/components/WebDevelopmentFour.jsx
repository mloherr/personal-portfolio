import '../scss/components/WebDevelopmentThree.scss';
import leftArrow from '../images/left-arrow.svg';
import righttArrow from '../images/right-arrow.svg';
import react from '../images/react.svg';
import sass from '../images/sass.svg';
import node from '../images/node.svg';
import sql from '../images/mysql.svg';
import lupa from '../images/lupa.svg';
import books1 from '../images/bookish1.webp';
import books2 from '../images/bookish2.webp';
import books3 from '../images/bookish3.webp';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

function WebDevelopmentThree() {
  const [index, setIndex] = useState(0);
  const images = [books1, books2, books3];

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
        <div className="carruselDevelopmentFour">
          <Zoom>
            <div
              role="img"
              className="carruselDevelopmentFour__mainPicture"
              style={{ backgroundImage: `url(${images[index]})` }}
            >
              <img
                className="carruselDevelopmentFour__mainPicture--zoom"
                src={lupa}
                alt="Icon for lens"
              />
            </div>
          </Zoom>
          <div className="carruselDevelopmentFour__smallPicture">
            <figure
              className="carruselDevelopmentFour__smallPicture--arrowLeft"
              onClick={handleClickPrevious}
            >
              <img src={leftArrow} alt="Icon of a left arrow" />
            </figure>

            <div className="carruselDevelopmentFour__smallPicture--one"></div>
            <div className="carruselDevelopmentFour__smallPicture--two"></div>
            <div className="carruselDevelopmentFour__smallPicture--three"></div>
            <figure
              className="carruselDevelopmentFour__smallPicture--arrowRight"
              onClick={handleClickNext}
            >
              <img src={righttArrow} alt="Icon of a right arrow" />
            </figure>
          </div>
        </div>
        <div className="infoSectionDevelopment">
          <h1 className="infoSectionDevelopment__title">Bookish Corner</h1>
          <p className="infoSectionDevelopment__description">
            Proyecto realizaro para practicar la autenticación con JSON Web
            Token, permitiendo añadir libros a favoritos.
          </p>

          <div className="infoSectionDevelopment__techonologies">
            <img src={react} alt="React logotipe" />
            <img src={sass} alt="SASS logotipe" />
            <img src={node} alt="NodeJs logotipe" />
            <img src={sql} alt="MySQL logotipe" />
          </div>

          <a
            href="https://bookis-corner-web.vercel.app/"
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
        <Link to="/web-development-3" className="otherProjects__left">
          <img src={leftArrow} alt="" />
        </Link>
        <Link to="/web-development-1" className="otherProjects__right">
          <img src={righttArrow} alt="" />
        </Link>
      </div>
    </section>
  );
}

export default WebDevelopmentThree;
