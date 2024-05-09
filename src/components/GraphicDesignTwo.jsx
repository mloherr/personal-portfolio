import '../scss/components/GraphicDesignOne.scss';
import leftArrow from '../images/left-arrow.svg';
import righttArrow from '../images/right-arrow.svg';
import ilustrator from '../images/ilustrator.svg';
import photoshop from '../images/photoshop.svg';
import lupa from '../images/lupa.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

function GraphicDesignOne() {
  const [index, setIndex] = useState(0);
  const images = [
    '/src/images/ces-1.png',
    '/src/images/ces-2.png',
    '/src/images/ces-3.png',
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
    <section className="designSection">
      <div className="designSection__itemsContainer">
        <div className="carruselDesignTwo">
          <Zoom>
            <div
              role="img"
              className="carruselDesignTwo__mainPicture"
              style={{ backgroundImage: `url(${images[index]})` }}
            >
              <img
                className="carruselDesignTwo__mainPicture--zoom"
                src={lupa}
                alt=""
              />
            </div>
          </Zoom>
          <div className="carruselDesignTwo__smallPicture">
            <figure
              className="carruselDesignTwo__smallPicture--arrowLeft"
              onClick={handleClickPrevious}
            >
              <img src={leftArrow} alt="Icon of a left arrow" />
            </figure>

            <div className="carruselDesignTwo__smallPicture--one"></div>
            <div className="carruselDesignTwo__smallPicture--two"></div>
            <div className="carruselDesignTwo__smallPicture--three"></div>
            <figure
              className="carruselDesignTwo__smallPicture--arrowRight"
              onClick={handleClickNext}
            >
              <img src={righttArrow} alt="Icon of a right arrow" />
            </figure>
          </div>
        </div>
        <div className="infoSectionDesign">
          <h1 className="infoSectionDesign__title">DÍPTICO CORPORATIVO</h1>
          <p className="infoSectionDesign__description">
            Diseño de díptico para PYME a incluir en la agenda 2024 con un breve
            resumen de los servicios ofertados y los principales colaboradores.
          </p>
          <div className="infoSectionDesign__techonologies">
            <img src={ilustrator} alt="" />
            <img src={photoshop} alt="" />
          </div>
          <button
            className={
              isOnVisible
                ? 'infoSectionDesign__buttonOn'
                : 'infoSectionDesign__buttonOff'
            }
            onClick={handleOnClick}
          >
            Ver proyecto
          </button>
        </div>
      </div>
      <div className="otherProjects">
        <Link to="/graphic-design-1">
          <img className="otherProjects__left" src={leftArrow} alt="" />
        </Link>
        <Link to="/graphic-design-1">
          <img className="otherProjects__right" src={righttArrow} alt="" />
        </Link>
      </div>
    </section>
  );
}

export default GraphicDesignOne;
