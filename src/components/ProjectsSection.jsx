import '../scss/components/ProjectsSection.scss';
import '../scss/core/variables.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import quijote from '../images/quijote.jpg';
import fantasma from '../images/Fantasma.png';
import web from '../images/web.png';

function ProjectsSection() {
  return (
    <section className="projectsSection">
      <Link to="/graphic-design-1">
        <div className="projectsSection__cardDesign">
          <figure className="projectsSection__cardDesign--background">
            <img src={quijote} alt="Design for JCCM tourist center" />
          </figure>
          <p className="projectsSection__cardDesign--text">DISEÑO GRÁFICO</p>
        </div>
      </Link>
      <div className="projectsSection__cardIlustration">
        <figure className="projectsSection__cardIlustration--background">
          <img src={fantasma} alt="Digital drawing for the spooky season" />
        </figure>
        <p className="projectsSection__cardIlustration--text">ILUSTRACIÓN</p>
      </div>
      <div className="projectsSection__cardProgramming">
        <figure className="projectsSection__cardProgramming--background">
          <img src={web} alt="Digital drawing for the spooky season" />
        </figure>
        <p className="projectsSection__cardProgramming--text">DESARROLLO WEB</p>
      </div>
    </section>
  );
}

export default ProjectsSection;
