import Logos from '../../Services/Utils/Logos'

export default function Navbar ({ homeFill }) {
  // Changing the home icon to wanted
  let house = <></>
  homeFill ? (house = <Logos logoName='houseFill' />) : (house = <Logos logoName='house' />)
  return (
    <nav className='nav'>
      <ul className='nav__ul'>
        <li className='nav__li'>
          <a href='#home' className='nav__a nav__a--active'>
            <div className='nav__icon nav__icon--notification'>
              {house}
            </div>
          </a>
        </li>
        <li className='nav__li'>
          <a href='#home' className='nav__a'>
            <div className='nav__icon'>
              <Logos logoName='lens' />
            </div>
          </a>
        </li>
        <li className='nav__li'>
          <a href='#home' className='nav__a'>
            <div className='nav__icon'>
              <Logos logoName='bell' />
            </div>
          </a>
        </li>
        <li className='nav__li'>
          <a href='#home' className='nav__a'>
            <div className='nav__icon'>
              <Logos logoName='mail' />
            </div>
          </a>
        </li>
      </ul>
    </nav>
  )
}
