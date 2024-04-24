import '../scss/components/Hero.scss';
import '../scss/core/variables.scss';

function Hero() {
  return (
    <div className="hero">
      <figure className="hero__image">
        <img src="" alt="" />
      </figure>
      <h1 className="hero__title"></h1>
      <h2 className="hero__subtitle"></h2>
      <p className="hero__text"></p>
      <div className="hero__buttons">
        <button className="hero__buttons--linkedin"></button>
        <button className="hero__buttons--github"></button>
        <button className="hero__buttons--instagram"></button>
      </div>
    </div>
  );
}

export default Hero;
