import pic from '../assets/profilepic.jpg';
import {ReactComponent as Stars} from '../assets/svg/stars.svg';

export default function Header() {

    return (
        <header className="header">
            <div className="header__container">
                <img src={pic} alt="Profile pic" className="header__img"/>
                <span className="header__title">Home</span>
                <button className="header__stars"><Stars /></button>
            </div>
        </header>
    )
}