import { Route, Routes } from 'react-router-dom'
import SidebarNav from './Components/SidebarNav'
import Home from './Layouts/Home'
import ImageView from './Layouts/ImageView'
import TweetView from './Layouts/TweetView'

function App () {
  return (
    <div className='app'>
      <SidebarNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/:username/status/:tweetId/img/:n'
          element={<ImageView />}
        />
        <Route
          path='/:username/status/:tweetId'
          element={<TweetView />}
        />
      </Routes>
    </div>
  )
}

export default App
