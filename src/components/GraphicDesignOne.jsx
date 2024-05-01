import '../scss/components/GraphicDesignOne.scss';
import leftArrow from '../images/left-arrow.svg';
import righttArrow from '../images/right-arrow.svg';
import ilustrator from '../images/ilustrator.png';
import photoshop from '../images/photoshop.png';
import { useState } from 'react';

function GraphicDesignOne() {
  const [index, setIndex] = useState(0);
  const images = [
    '/src/images/Mockup_Completo.jpg',
    '/src/images/Mockup_Quijote.jpg',
    '/src/images/Mockup_Folklore.jpg',
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
    <section className="graphicDesignContainer">
      <div
        className="graphicDesignContainer__mainPicture"
        style={{ backgroundImage: `url(${images[index]})` }}
      ></div>
      <div className="graphicDesignContainer__smallPicture">
        <figure
          className="graphicDesignContainer__smallPicture--arrowLeft"
          onClick={handleClickPrevious}
        >
          <img src={leftArrow} alt="Icon of a left arrow" />
        </figure>

        <div className="graphicDesignContainer__smallPicture--one"></div>
        <div className="graphicDesignContainer__smallPicture--two"></div>
        <div className="graphicDesignContainer__smallPicture--three"></div>
        <figure
          className="graphicDesignContainer__smallPicture--arrowRight"
          onClick={handleClickNext}
        >
          <img src={righttArrow} alt="Icon of a right arrow" />
        </figure>
      </div>
      <div className="graphicDesignContainer__text">
        <h1 className="graphicDesignContainer__text--title">
          TARJETAS TURISMO
        </h1>
        <p className="graphicDesignContainer__text--info">
          Diseño de flyers con información turística sobre Castilla-La Mancha
        </p>
      </div>
      <div className="graphicDesignContainer__techonologies">
        <img src={ilustrator} alt="" />
        <img src={photoshop} alt="" />
      </div>
      <button
        className={
          isOnVisible
            ? 'graphicDesignContainer__buttonOn'
            : 'graphicDesignContainer__buttonOff'
        }
        onClick={handleOnClick}
      >
        SIGUIENTE PROYECTO
      </button>
    </section>
  );
}

export default GraphicDesignOne;
