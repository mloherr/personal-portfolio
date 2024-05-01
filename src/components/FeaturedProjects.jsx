import '../scss/components/FeaturedProjects.scss';
import '../scss/core/variables.scss';
import BannerProjects from './BannerProjects';
import { useState, useEffect } from 'react';

function FeaturedProjects() {
  const [index, setIndex] = useState(0);
  const images = [
    '/src/images/Mockup_Completo.jpg',
    '/src/images/MockupWebGroupOne.png',
    '/src/images/fantasmabig.png',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="featuredProjects">
      <BannerProjects items={['PROYECTOS DESTACADOS']} />
      <div className="imageSection">
        <div
          className="imageSection__carrusel"
          style={{ backgroundImage: `url(${images[index]})` }}
        ></div>
      </div>
    </section>
  );
}

export default FeaturedProjects;
