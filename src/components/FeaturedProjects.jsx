import '../scss/components/FeaturedProjects.scss';
import '../scss/core/variables.scss';
import BannerProjects from './BannerProjects';
import projectJCCM from '../images/Featured1.jpg';
import dipticoCes from '../images/Featured2.png';
import projectHaikus from '../images/Featured3.png';
import { useState, useEffect } from 'react';

function FeaturedProjects() {
  const [index, setIndex] = useState(0);
  const images = [projectJCCM, dipticoCes, projectHaikus];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="featuredProjects">
      <BannerProjects
        items={['PROYECTOS DESTACADOS', 'PROYECTOS DESTACADOS']}
      />
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
