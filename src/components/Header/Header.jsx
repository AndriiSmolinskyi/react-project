import { NavLink } from 'react-router-dom';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faHouse, faHeart, faBell, faCartShopping } from '@fortawesome/free-solid-svg-icons';
library.add(faUser, faHouse, faHeart, faBell, faCartShopping);

export const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__nav__ul">
          <li className="nav__item">
            <NavLink exact={true.toString()} to="/" className="nav__link"  >
              <span className="nav__link__text">Home</span>
              <FontAwesomeIcon icon={faHouse} />
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/like" className="nav__link"  >
              <span className="nav__link__text">Like</span>
              <FontAwesomeIcon icon={faHeart} />
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/notif" className="nav__link"  >
              <span className="nav__link__text">Notifications</span>
              <FontAwesomeIcon icon={faBell} />
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/cart" className="nav__link">
              <span className="nav__link__text">Cart</span>
              <FontAwesomeIcon icon={faCartShopping} />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};