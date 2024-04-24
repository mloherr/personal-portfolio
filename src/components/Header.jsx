import '../scss/components/Header.scss';
import '../scss/core/variables.scss';
import logo from '../images/logo.png';
import menu from '../images/menu.svg';
import { useState } from 'react';
import NavMenu from './NavMenu';
import { Link } from 'react-router-dom';

function Header() {
  const [isOnVisible, setIsOnVisible] = useState(false);

  const handleOnClick = () => {
    setIsOnVisible(!isOnVisible);
  };

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
      {isOnVisible && <NavMenu />}
      <nav className="hidden">
        <a href=""></a>
        <a href=""></a>
        <a href=""></a>
      </nav>
    </header>
  );
}

export default Header;
