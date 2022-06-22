import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../../Components/Navbar'
import tweets from '../../Assets/Data/Tweets/tweets.json'
import TweetDetail from '../../Components/TweetDetail'
import TweetComments from '../../Components/TweetComments'
import Logos from '../../Services/Utils/Logos'

export default function TweetView () {
  const { tweetId } = useParams()
  const navigate = useNavigate()
  const tweet = tweets.find((tweet) => String(tweet.id) === tweetId)
  return (
    <>
      <div className='home'>
        <main className='home__main'>

          <div className='tweet-view'>
            <div className='tweet-view__header'>
              <button
                className='tweet-view__go-back'
                onClick={() => navigate(-1)}
              >
                <Logos logoName='arrow' />
              </button>
              <h2 className='tweet-view__h2'>Tweet</h2>
              <button className='tweet-view__open-app'>Open app</button>
            </div>
            <div className='tweet-view__main'>
              <div className='tweet-view__tweet'>
                <TweetDetail tweet={tweet} />
              </div>
              <div className='tweet-view__comments'>
                <TweetComments tweet={tweet} />
              </div>
            </div>
          </div>
          <Navbar homeFill={false} />
        </main>
      </div>
    </>
  )
}
