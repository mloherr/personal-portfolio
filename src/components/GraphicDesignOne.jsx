import '../scss/components/GraphicDesignOne.scss';
import leftArrow from '../images/left-arrow.svg';
import righttArrow from '../images/right-arrow.svg';
import ilustrator from '../images/ilustrator.svg';
import photoshop from '../images/photoshop.svg';
import lupa from '../images/lupa.svg';
import firstMockup from '../images/Mockup_Completo.jpg';
import secondMockup from '../images/Mockup_Quijote.jpg';
import thirdMockup from '../images/Mockup_Folklore.jpg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

function GraphicDesignOne() {
  const [index, setIndex] = useState(0);
  const images = [firstMockup, secondMockup, thirdMockup];
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
    link.href = '../files/FILES_JCCM.pdf';
    link.download = 'FILES_JCCM.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsOnVisible(isOnVisible);
  };
  return (
    <section className="designSection">
      <div className="designSection__itemsContainer">
        <div className="carruselDesign">
          <Zoom>
            <div
              role="img"
              className="carruselDesign__mainPicture"
              style={{ backgroundImage: `url(${images[index]})` }}
            >
              <img
                className="carruselDesign__mainPicture--zoom"
                src={lupa}
                alt="Icon for lens"
              />
            </div>
          </Zoom>
          <div className="carruselDesign__smallPicture">
            <figure
              className="carruselDesign__smallPicture--arrowLeft"
              onClick={handleClickPrevious}
            >
              <img src={leftArrow} alt="Icon of a left arrow" />
            </figure>

            <div className="carruselDesign__smallPicture--one"></div>
            <div className="carruselDesign__smallPicture--two"></div>
            <div className="carruselDesign__smallPicture--three"></div>
            <figure
              className="carruselDesign__smallPicture--arrowRight"
              onClick={handleClickNext}
            >
              <img src={righttArrow} alt="Icon of a right arrow" />
            </figure>
          </div>
        </div>
        <div className="infoSectionDesign">
          <h1 className="infoSectionDesign__title">TARJETAS TURISMO</h1>
          <p className="infoSectionDesign__description">
            Diseño de flyers con información turística sobre Castilla-La Mancha
            para la asignatura curricular de Principios del Diseño.
          </p>
          <div className="infoSectionDesign__techonologies">
            <img src={ilustrator} alt="Adobe Ilustrator Logotipe" />
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
        <Link to="/graphic-design-2" className="otherProjects__left">
          <img src={leftArrow} alt="" />
        </Link>
        <Link to="/graphic-design-2" className="otherProjects__right">
          <img src={righttArrow} alt="" />
        </Link>
      </div>
    </section>
  );
}

export default GraphicDesignOne;
