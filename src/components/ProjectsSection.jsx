import '../scss/components/ProjectsSection.scss';
import '../scss/core/variables.scss';
import { useState, useEffect } from 'react';

function ProjectsSection() {
  const [index, setIndex] = useState(0);
  const images = [
    '/src/images/quijote.jpg',
    '/src/images/web.png',
    '/src/images/Fantasma.png',
  ];

  const handleClick = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  return (
    <section className="projectsSection">
      <div
        className="projectsSection__littleCardOne"
        style={{
          backgroundImage: `url(${
            images[index === 0 ? images.length - 1 : index - 1]
          })`,
        }}
      ></div>
      <div
        className="projectsSection__bigCard"
        style={{ backgroundImage: `url(${images[index]})` }}
        onScroll={handleClick}
      ></div>
      <div
        className="projectsSection__littleCardTwo"
        style={{
          backgroundImage: `url(${images[(index + 1) % images.length]})`,
        }}
      ></div>
    </section>
  );
}

export default ProjectsSection;
