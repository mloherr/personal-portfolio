import '../scss/components/GraphicDesignOne.scss';
import leftArrow from '../images/left-arrow.svg';
import righttArrow from '../images/right-arrow.svg';
import ilustrator from '../images/ilustrator.svg';
import photoshop from '../images/photoshop.svg';
import lupa from '../images/lupa.svg';
import ces1 from '../images/ces-1.png';
import ces2 from '../images/ces-2.png';
import ces3 from '../images/ces-3.png';
import pdfFileWEB from '../files/FILES_CES.pdf';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

function GraphicDesignOne() {
  const [index, setIndex] = useState(0);
  const images = [ces1, ces2, ces3];
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
    const link = document.createElement('a');
    link.href = pdfFileWEB;
    link.download = 'FILES_WEB.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsOnVisible(isOnVisible);
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
                alt="Icon for lens"
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
            <img src={ilustrator} alt="Adobe Ilustrator logotipe" />
            <img src={photoshop} alt="Adobe Photoshop logotipe" />
          </div>
          <button
            className={
              isOnVisible
                ? 'infoSectionDesign__buttonOn'
                : 'infoSectionDesign__buttonOff'
            }
            onClick={handleOnClick}
          >
            Ver documentación
          </button>
        </div>
      </div>
      <div className="otherProjects">
        <Link to="/graphic-design-1" className="otherProjects__left">
          <img src={leftArrow} alt="" />
        </Link>
        <Link to="/graphic-design-1" className="otherProjects__right">
          <img src={righttArrow} alt="" />
        </Link>
      </div>
    </section>
  );
}

export default GraphicDesignOne;
