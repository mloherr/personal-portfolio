import '../scss/components/WebDevelopmentOne.scss';
import leftArrow from '../images/left-arrow.svg';
import righttArrow from '../images/right-arrow.svg';
import { useState, useEffect } from 'react';

function WebDevelopmentOne() {
  const [index, setIndex] = useState(0);
  const images = [
    '/src/images/mockup-web-desktop.png',
    '/src/images/web2.png',
    '/src/images/web3.png',
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
    <section className="webDevelopmentContainer">
      <div
        className="webDevelopmentContainer__mainPicture"
        style={{ backgroundImage: `url(${images[index]})` }}
      ></div>
      <div className="webDevelopmentContainer__smallPicture">
        <figure
          className="webDevelopmentContainer__smallPicture--arrowLeft"
          onClick={handleClickPrevious}
        >
          <img src={leftArrow} alt="Icon of a left arrow" />
        </figure>

        <div className="webDevelopmentContainer__smallPicture--one"></div>
        <div className="webDevelopmentContainer__smallPicture--two"></div>
        <div className="webDevelopmentContainer__smallPicture--three"></div>
        <figure
          className="webDevelopmentContainer__smallPicture--arrowRight"
          onClick={handleClickNext}
        >
          <img src={righttArrow} alt="Icon of a right arrow" />
        </figure>
      </div>
      <div className="webDevelopmentContainer__text">
        <h1 className="webDevelopmentContainer__text--title">
          WEB ESTÁTICA FLEXFEMMES
        </h1>
        <p className="webDevelopmentContainer__text--info">
          Maquetación de página web estática para presentación de equipo de
          trabajo de Front-end Developers.
        </p>
      </div>
      <div className="webDevelopmentContainer__techonologies">
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
      <button
        className={
          isOnVisible
            ? 'webDevelopmentContainer__buttonOn'
            : 'webDevelopmentContainer__buttonOff'
        }
        onClick={handleOnClick}
      >
        SIGUIENTE PROYECTO
      </button>
    </section>
  );
}

export default WebDevelopmentOne;
