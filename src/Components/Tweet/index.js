import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import TweetButtons from '../TweetButtons'
import getVerified from '../../Services/Utils/getVerified'

import setGallery from '../../Services/Utils/setGallery'
import Logos from '../../Services/Utils/Logos'
import getDateDifference from '../../Services/Utils/getDateDifference'
import getReplyTo from '../../Services/Utils/getReplyTo'

export default function Tweet ({ tweet }) {
  let images = <></>
  const navigate = useNavigate()

  // Get date difference
  const timeToShow = getDateDifference(tweet)

  // Get verified icon
  const verified = getVerified(tweet)

  // Set gallery
  images = setGallery(tweet)

  // onClick -> Navigate to tweet view
  const goToTweet = (e) => {
    // Controlling click
    if (
      (e.target === e.currentTarget) |
      (e.target === document.querySelector(`#tweet-${tweet.id} .tweet__p`)) |
      (e.target === document.querySelector(`#tweet-${tweet.id} .tweet__main`))
    ) { navigate(`/${tweet.username}/status/${tweet.id}`) }
  }

  useEffect(() => {
    // Deploying content
    const tweetContent = document.querySelector('#text-' + tweet.id)
    tweetContent.innerHTML = `
            <p class="tweet__p">
                ${tweet.content}
            </p>
        `

    // Adding 'replyTo' text
    if (tweet.replyTo) {
      tweetContent.prepend(getReplyTo(tweet))
    }
  })

  return (
    <article id={`tweet-${tweet.id}`} className='tweet' onClick={goToTweet}>
      <div className='tweet__left'>
        <img
          src={process.env.PUBLIC_URL + tweet.profilePic}
          alt={tweet.name + ' photo'}
          className='tweet__profile-pic profile-pic'
        />
      </div>
      <div className='tweet__main'>
        <div className='tweet__header'>
          <div className='tweet__title'>
            <span className='tweet__name'>{tweet.name}</span>
            {verified}
            <span className='tweet__username'>
              {'@' + tweet.username}
            </span>
            <span className='tweet__time'>{timeToShow}</span>
          </div>
          <button className='dots'>
            <Logos logoName='dots' />
          </button>
        </div>
        <div className='tweet__content'>
          <div id={'text-' + tweet.id} className='tweet__text' />
          <div id={'images-' + tweet.id} className='tweet__images'>
            {images}
          </div>
        </div>
        <TweetButtons tweet={tweet} />
      </div>
    </article>
  )
}
