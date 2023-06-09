import { Link } from 'react-router-dom';
import './Header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faHouse, faHeart, faBell, faCartShopping } from '@fortawesome/free-solid-svg-icons';
library.add(faUser, faHouse, faHeart, faBell, faCartShopping);

export const Header = () => {
  
  return (
    <header className='header'>
        <nav className='header__nav'>
          <ul className='header__nav__ul'>
            <li className='nav__item'>
              <Link to="/" className='nav__link'>
                <span>Home</span> 
                <FontAwesomeIcon icon={faHouse} />              
              </Link>
            </li>
            <li className='nav__item'>
              <Link to="/like" className='nav__link'>
                <span>Like</span>
                <FontAwesomeIcon icon={faHeart} />
                </Link>
            </li>
            <li className='nav__item'>
              <Link to="/notif" className='nav__link'>
                <span>Notifications</span>
                <FontAwesomeIcon icon={faBell} />
              </Link>
            </li>
            <li className='nav__item'>
              <Link to="/cart" className='nav__link'>
                <span>Cart</span>
                <FontAwesomeIcon icon={faCartShopping} />
              </Link>
            </li>
          </ul>
        </nav>
    </header>
  );
}
