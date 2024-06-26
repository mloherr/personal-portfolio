import '../scss/components/ProjectsSection.scss';
import '../scss/core/variables.scss';
import { Link } from 'react-router-dom';

function ProjectsSection() {
  return (
    <section className="projectsSection">
      <Link to="/graphic-design-1">
        <div className="projectsSection__cardDesign">
          <div className="projectsSection__cardDesign--background"></div>
          <p className="projectsSection__cardDesign--text">DISEÑO GRÁFICO</p>
        </div>
      </Link>
      <Link to="/web-development-1">
        <div className="projectsSection__cardProgramming">
          <div className="projectsSection__cardProgramming--background"></div>
          <p className="projectsSection__cardProgramming--text">
            DESARROLLO WEB
          </p>
        </div>
      </Link>
      <div className="projectsSection__cardIlustration">
        <div className="projectsSection__cardIlustration--background"></div>
        <p className="projectsSection__cardIlustration--text">
          EN CONSTRUCCIÓN
        </p>
      </div>
    </section>
  );
}

export default ProjectsSection;
