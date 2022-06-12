import { ReactComponent as House } from '../assets/svg/home.svg';
import { ReactComponent as Lens } from '../assets/svg/lens.svg';
import { ReactComponent as Bell } from '../assets/svg/bell.svg';
import { ReactComponent as Mail } from '../assets/svg/mail.svg';

export default function Navbar() {
  return (
    <nav className="nav">
      <ul className="nav__ul">
        <li className="nav__li">
          <a href="#home" className="nav__a nav__a--active">
            <House />
          </a>
        </li>
        <li className="nav__li">
          <a href="#home" className="nav__a">
            <Lens />
          </a>
        </li>
        <li className="nav__li">
          <a href="#home" className="nav__a">
            <Bell />
          </a>
        </li>
        <li className="nav__li">
          <a href="#home" className="nav__a">
            <Mail />
          </a>
        </li>
      </ul>
    </nav>
  );
}
