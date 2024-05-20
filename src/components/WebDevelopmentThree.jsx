import '../scss/components/WebDevelopmentThree.scss';
import leftArrow from '../images/left-arrow.svg';
import righttArrow from '../images/right-arrow.svg';
import angular from '../images/angular.svg';
import tailwind from '../images/tailwind.svg';
import css from '../images/css.svg';
import lupa from '../images/lupa.svg';
import commerce1 from '../images/fakeCommerce1.webp';
import commerce2 from '../images/fakeCommerce2.webp';
import commerce3 from '../images/fakeCommerce3.webp';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

function WebDevelopmentOne() {
  const [index, setIndex] = useState(0);
  const images = [commerce1, commerce3, commerce2];

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
          <h1 className="infoSectionDevelopment__title">Fake Commerce</h1>
          <p className="infoSectionDevelopment__description">
            Proyecto realizado como parte de mi formación en Angular 17,
            consistente en la elaboración de un e-commerce falso.
          </p>

          <div className="infoSectionDevelopment__techonologies">
            <img src={angular} alt="Angular logotipe" />
            <img src={tailwind} alt="TailwindCSS logotipe" />
            <img src={css} alt="CSS logotipe" />
          </div>

          <a
            href="https://fake-store-lyart.vercel.app/"
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
        <Link to="/web-development-2" className="otherProjects__right">
          <img src={righttArrow} alt="" />
        </Link>
      </div>
    </section>
  );
}

export default WebDevelopmentOne;
