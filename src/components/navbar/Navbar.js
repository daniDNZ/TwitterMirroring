import { ReactComponent as House } from '../../svg/home.svg';
import { ReactComponent as Lens } from '../../svg/lens.svg';
import { ReactComponent as Bell } from '../../svg/bell.svg';
import { ReactComponent as Mail } from '../../svg/mail.svg';

export default function Navbar() {
  return (
    <nav className="nav">
      <ul className="nav__ul">
        <li className="nav__li">
          <a href="#home" className="nav__a nav__a--active">
            <div className="nav__icon nav__icon--notification">
                <House />
            </div>
          </a>
        </li>
        <li className="nav__li">
          <a href="#home" className="nav__a">
            <div className="nav__icon">
                <Lens />
            </div>
          </a>
        </li>
        <li className="nav__li">
          <a href="#home" className="nav__a">
            <div className="nav__icon">
                <Bell />
            </div>
          </a>
        </li>
        <li className="nav__li">
          <a href="#home" className="nav__a">
            <div className="nav__icon">
                <Mail />
            </div>
          </a>
        </li>
      </ul>
    </nav>
  );
}
