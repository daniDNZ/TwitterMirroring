import Tweet from '../Tweet'
import tweets from '../../Assets/Data/Tweets/tweets.json'
import Logos from '../../Services/Utils/Logos'
import WhatsHappening from '../WhatsHappening'

export default function Feed () {
  return (
    <>
      <div className='show-tweets'>
        <WhatsHappening />
        <button className='show-tweets__btn'>
          <span className='show-tweets__span'>Show 34 Tweets</span>
        </button>
      </div>
      <div className='feed'>
        {tweets.map((tweet) => (
          <Tweet tweet={tweet} key={tweet.id} />
        ))}
        <button className='new-tweet'>
          <Logos logoName='newTweet' />
        </button>
      </div>
    </>
  )
}
