import '../scss/core/variables.scss';
import '../scss/components/AboutMeSection.scss';
import { useState } from 'react';

function AboutMeSection() {
  const [isTitleVisible, setIsTitleVisible] = useState(true);
  const [isDesignTitleVisible, setIsDesignTitleVisible] = useState(true);
  const [isWebTitleVisible, setIsWebTitleVisible] = useState(true);
  const [isDrafTitleVisible, setIsDrafTitleVisible] = useState(true);
  const [isProfileTitleVisible, setIsProfileTitleVisible] = useState(true);

  const handleSetTitle = () => {
    setIsTitleVisible(!isTitleVisible);
  };

  const handleSetDesignTitle = () => {
    setIsDesignTitleVisible(!isDesignTitleVisible);
  };

  const handleSetWebTitle = () => {
    setIsWebTitleVisible(!isWebTitleVisible);
  };

  const handleSetDraftTitle = () => {
    setIsDrafTitleVisible(!isDrafTitleVisible);
  };

  const handleSetProfileTitle = () => {
    setIsProfileTitleVisible(!isProfileTitleVisible);
  };

  return (
    <section className="aboutMeSection">
      <div className="aboutMeSection__cardsContainer">
        <div
          className="aboutMeSection__cardsContainer--title"
          onClick={handleSetTitle}
        >
          {isTitleVisible ? (
            <p className="titleText">¿CUÁL ES MI LEMA?</p>
          ) : (
            <p className="cardBody">
              Mi experiencia como Trabajadora Social me ha hecho una firme
              creyente del poder transformador del Diseño Gráfico.
            </p>
          )}
        </div>
        <div
          className="aboutMeSection__cardsContainer--little"
          onClick={handleSetDesignTitle}
        >
          {isDesignTitleVisible ? (
            <p className="subtitleText">¿QUÉ APORTO COMO DISEÑADORA GRÁFICA?</p>
          ) : (
            <>
              <p className="subtitleText">Diseño Gráfico</p>
              <p className="cardBody">
                Diseño cualquier elemento corporativo, logrando que refleje tu
                ADN al 100%.
              </p>
            </>
          )}
        </div>
        <div
          className="aboutMeSection__cardsContainer--little"
          onClick={handleSetWebTitle}
        >
          {' '}
          {isWebTitleVisible ? (
            <p className="subtitleText">¿QUÉ APORTO COMO DESARROLLADORA WEB?</p>
          ) : (
            <>
              <p className="subtitleText">Desarrollo Web</p>
              <p className="cardBody">
                Me encargo de todo el proceso de desarrollo de aplicaciones web
                por mi perfil full-stack.
              </p>
            </>
          )}
        </div>
        <div
          className="aboutMeSection__cardsContainer--little"
          onClick={handleSetDraftTitle}
        >
          {isDrafTitleVisible ? (
            <p className="subtitleText">¿QUÉ APORTO COMO REDACTORA?</p>
          ) : (
            <>
              <p className="subtitleText">Redacción</p>
              <p className="cardBody">
                Te ayudo a desarrollar cualquier contenido escrito para tu
                empresa o pequeño negocio.
              </p>
            </>
          )}
        </div>
        <div
          className="aboutMeSection__cardsContainer--little"
          onClick={handleSetProfileTitle}
        >
          {isProfileTitleVisible ? (
            <p className="subtitleText">
              ¿QUÉ ME DIFERENCIA DE OTROS PERFILES?
            </p>
          ) : (
            <>
              <p className="subtitleText">Bonus</p>
              <p className="cardBody">
                Gracias a mi trayectoria profesional previa, la accesibilidad
                está muy presente en todolo que hago.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default AboutMeSection;
