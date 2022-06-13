import {ReactComponent as Stars} from '../../svg/stars.svg';

export default function Header() {

    return (
        <header className="header">
            <div className="header__container">
                <img src={'/img/profilepic.jpg'} alt="Profile pic" className="header__img profile-pic"/>
                <span className="header__title">Home</span>
                <button className="header__stars"><Stars /></button>
            </div>
        </header>
    )
}