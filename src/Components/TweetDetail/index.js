import { useEffect } from 'react'
import getInteractionCounters from '../../Services/Utils/getInteractionCounters'
import getTimeData from '../../Services/Utils/getTimeData'
import getVerified from '../../Services/Utils/getVerified'
import Logos from '../../Services/Utils/Logos'
import setGallery from '../../Services/Utils/setGallery'
import TweetButtons from '../TweetButtons'

export default function TweetDetail ({ tweet }) {
  let images = <></>
  // Get verified icon if the user is verified
  const verified = getVerified(tweet)

  // Get time data
  const datetime = getTimeData(tweet)

  // Get counters
  const counters = getInteractionCounters(tweet)

  // Making gallery
  images = setGallery(tweet)

  useEffect(() => {
    const tText = document.querySelector('.t-detail__text')
    tText.innerHTML = tweet.content
  })

  return (
    <div className='t-detail'>
      <div className='t-detail__header'>
        <img
          src={process.env.PUBLIC_URL + tweet.profilePic}
          alt=''
          className='t-detail__profile-pic profile-pic'
        />
        <div className='t-detail__profile-info'>
          <div className='t-detail__name-user-container'>
            <span className='profile-info__name'>
              {tweet.name}
              {verified}
            </span>

            <span className='profile-info__username'>
              {'@' + tweet.username}
            </span>
          </div>
          <button className='dots'>
            <Logos logoName='dots' />
          </button>
        </div>
      </div>
      <div className='tweet__content'>
        <div className='t-detail__text' />
        <div className='t-detail__media'>
          {images}
        </div>
      </div>
      <div className='t-detail__data'>
        {datetime}
      </div>
      <div className='t-detail__counters'>
        {counters.retweets}
        {counters.likes}
      </div>
      <div className='t-detail__interaction'>
        <TweetButtons
          tweet={{
            counters: { retweets: '', comments: '', likes: '' }
          }}
        />
      </div>
    </div>
  )
}
