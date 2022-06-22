import Feed from '../../Components/Feed'
import Header from '../../Components/Header'
import Navbar from '../../Components/Navbar'

export default function Home () {
  return (
    <div id='home' className='home'>
      <main className='home__main'>
        <Header />
        <Feed />
        <Navbar homeFill />
      </main>
    </div>
  )
}
