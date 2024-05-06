import '../scss/components/Header.scss';
import '../scss/core/variables.scss';
import logo from '../images/logo.png';
import menu from '../images/menu.svg';
import { useState, useEffect } from 'react';
import NavMenu from './NavMenu';
import { useLocation, Link } from 'react-router-dom';

function Header() {
  const { pathname } = useLocation();
  const [isOnVisible, setIsOnVisible] = useState(false);

  const handleOnClick = () => {
    setIsOnVisible(!isOnVisible);
  };
  useEffect(() => {
    setIsOnVisible(false);
  }, [pathname]);

  return (
    <header className="header">
      <Link to="/">
        <figure className="header__logotipe">
          <img src={logo} alt="logotipe personal brand" />
        </figure>
      </Link>
      <button
        className={isOnVisible ? 'header__buttonOn' : 'header__buttonOff'}
        onClick={handleOnClick}
      >
        <img src={menu} alt="hamburguer menu image" />
      </button>
      {isOnVisible && <NavMenu handleOnClick={handleOnClick} />}
      <nav className="hidden">
        <a href=""></a>
        <a href=""></a>
        <a href=""></a>
      </nav>
    </header>
  );
}

export default Header;
