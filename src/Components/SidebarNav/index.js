import Logos from '../../Services/Utils/Logos'

export default function SidebarNav () {
  return (
    <aside className='sidebar-nav'>
      <div className='sidebar-nav__container'>
        <div className='sidebar-nav__content'>
          <div className='sidebar-nav__logo'>
            <button className='nav__a'>
              <div className='nav__icon'>
                <Logos logoName='twitter' />
              </div>
            </button>
          </div>
          <div className='sidebar-nav__buttons'>
            <button className='nav__a nav__a--active'>
              <div className='nav__icon nav__icon--notification'>
                <Logos logoName='houseFill' />
              </div>
            </button>
            <button className='nav__a'>
              <div className='nav__icon'>
                <Logos logoName='lens' />
              </div>
            </button>
            <button className='nav__a'>
              <div className='nav__icon'>
                <Logos logoName='bell' />
              </div>
            </button>
            <button className='nav__a'>
              <div className='nav__icon'>
                <Logos logoName='mail' />
              </div>
            </button>
            <button className='nav__a'>
              <div className='nav__icon'>
                <Logos logoName='bookmark' />
              </div>
            </button>
            <button className='nav__a'>
              <div className='nav__icon'>
                <Logos logoName='document' />
              </div>
            </button>
            <button className='nav__a'>
              <div className='nav__icon'>
                <Logos logoName='person' />
              </div>
            </button>
            <button className='nav__a'>
              <div className='nav__icon'>
                <Logos logoName='moreRounded' />
              </div>
            </button>
            <button className='new-tweet'>
              <Logos logoName='newTweet' />
            </button>
          </div>
          <div className='sidebar-nav__new' />
        </div>
        <div className='sidebar-nav__user'>
          <img
            src={process.env.PUBLIC_URL + '/img/profilepic.jpg'}
            alt='Profile pic'
            className='profile-pic'
          />
        </div>
      </div>
    </aside>
  )
}
