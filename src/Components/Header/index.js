import Logos from '../../Services/Utils/Logos'

export default function Header () {
  return (
    <header className='header'>
      <div className='header__container'>
        <img
          src={process.env.PUBLIC_URL + '/img/profilepic.jpg'}
          alt='Profile pic'
          className='header__img profile-pic'
        />
        <span className='header__title'>Home</span>
        <button className='header__stars'>
          <Logos logoName='stars' />
        </button>
      </div>
    </header>
  )
}
