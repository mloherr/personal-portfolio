import '../scss/core/variables.scss';
import '../scss/components/NavMenu.scss';
import { Link } from 'react-router-dom';

function NavMenu() {
  return (
    <aside className="menu">
      <Link to="/about-me">
        <p className="menu__link">ABOUT ME</p>
      </Link>
      <Link to="/projects">
        <p className="menu__link">PROYECTOS</p>
      </Link>
      <Link to="/contact">
        <p className="menu__link">CONTACT ME</p>
      </Link>
    </aside>
  );
}

export default NavMenu;
