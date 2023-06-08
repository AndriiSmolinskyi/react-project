import { Link } from 'react-router-dom';
import './Header.scss'

export const Header = () => {
  return (
    <header className='header'>
        <nav className='header__nav'>
          <ul className='header__nav__ul'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/like">Like</Link>
            </li>
            <li>
              <Link to="/notif">Notif</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
    </header>
  );
}