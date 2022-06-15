import { ReactComponent as House } from "../../Assets/Svg/home.svg";
import { ReactComponent as HouseFill } from "../../Assets/Svg/homeFill.svg";
import { ReactComponent as Lens } from "../../Assets/Svg/lens.svg";
import { ReactComponent as Bell } from "../../Assets/Svg/bell.svg";
import { ReactComponent as Mail } from "../../Assets/Svg/mail.svg";

export default function Navbar({ homeFill }) {
    // Changing the home icon to wanted
    let house = <></>;
    homeFill ? (house = <HouseFill />) : (house = <House />);
    return (
        <nav className="nav">
            <ul className="nav__ul">
                <li className="nav__li">
                    <a href="#home" className="nav__a nav__a--active">
                        <div className="nav__icon nav__icon--notification">
                            {house}
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
