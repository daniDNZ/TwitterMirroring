import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SidebarNav from './Components/SidebarNav'
import Home from './Layouts/Home'
import ImageView from './Layouts/ImageView'
import TweetView from './Layouts/TweetView'

function App () {
  return (
    <div className='app'>
      <SidebarNav />
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  )
}

export default App
