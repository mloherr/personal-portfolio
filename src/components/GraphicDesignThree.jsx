import '../scss/components/GraphicDesignThree.scss';
import leftArrow from '../images/left-arrow.svg';
import righttArrow from '../images/right-arrow.svg';
import ilustrator from '../images/ilustrator.svg';
import aftereffects from '../images/aftereffects.svg';
import lupa from '../images/lupa.svg';
import grajo1 from '../images/grajo1.webp';
import grajo2 from '../images/grajo2.webp';
import grajo3 from '../images/grajo3.webp';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

function GraphicDesigThree() {
  const [index, setIndex] = useState(0);
  const images = [grajo1, grajo2, grajo3];
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
    setIsOnVisible(isOnVisible);
  };
  return (
    <section className="designSection">
      <div className="designSection__itemsContainer">
        <div className="carruselDesignThree">
          <Zoom>
            <div
              role="img"
              className="carruselDesignThree__mainPicture"
              style={{ backgroundImage: `url(${images[index]})` }}
            >
              <img
                className="carruselDesignThree__mainPicture--zoom"
                src={lupa}
                alt="Icon for lens"
              />
            </div>
          </Zoom>
          <div className="carruselDesignThree__smallPicture">
            <figure
              className="carruselDesignThree__smallPicture--arrowLeft"
              onClick={handleClickPrevious}
            >
              <img src={leftArrow} alt="Icon of a left arrow" />
            </figure>

            <div className="carruselDesignThree__smallPicture--one"></div>
            <div className="carruselDesignThree__smallPicture--two"></div>
            <div className="carruselDesignThree__smallPicture--three"></div>
            <figure
              className="carruselDesignThree__smallPicture--arrowRight"
              onClick={handleClickNext}
            >
              <img src={righttArrow} alt="Icon of a right arrow" />
            </figure>
          </div>
        </div>
        <div className="infoSectionDesign">
          <h1 className="infoSectionDesign__title">ANIMACIÓN CORPORATIVA</h1>
          <p className="infoSectionDesign__description">
            Diseño y animación como parte de la promoción de la marca de un
            estudio de diseño.
          </p>
          <div className="infoSectionDesign__techonologies">
            <img src={ilustrator} alt="Adobe Ilustrator logotipe" />
            <img src={aftereffects} alt="Adobe AfterEffects logotipe" />
          </div>
          <a
            href="https://www.instagram.com/reel/C7MFyKbrVhG/?igsh=MTFiOGNraHR2ZWM0YQ%3D%3D"
            target="_blank"
            className={
              isOnVisible
                ? 'infoSectionDesign__buttonOn'
                : 'infoSectionDesign__buttonOff'
            }
            onClick={handleOnClick}
          >
            Ve Proyecto
          </a>
        </div>
      </div>
      <div className="otherProjects">
        <Link to="/graphic-design-2" className="otherProjects__left">
          <img src={leftArrow} alt="" />
        </Link>
        <Link to="/graphic-design-1" className="otherProjects__right">
          <img src={righttArrow} alt="" />
        </Link>
      </div>
    </section>
  );
}

export default GraphicDesigThree;
