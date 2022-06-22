import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import TweetButtons from '../TweetButtons'
import getVerified from '../../Services/Utils/getVerified'

import tweets from '../../Assets/Data/Tweets/tweets.json'
import setGallery from '../../Services/Utils/setGallery'
import Logos from '../../Services/Utils/Logos'

export default function Tweet ({ tweet }) {
  let images = <></>
  const navigate = useNavigate()

  // Get date difference
  const getDateDifference = tweet => {
    const currentDate = new Date()
    const tweetDate = new Date(tweet.date)
    let timeToShow

    if (currentDate.toLocaleDateString() === tweetDate.toLocaleDateString()) {
      currentDate.getHours() === tweetDate.getHours()
        ? (timeToShow = `${
        currentDate.getMinutes() - tweetDate.getMinutes()
      }m`)
        : (timeToShow = `${
        currentDate.getHours() - tweetDate.getHours()
      }h`)
    } else {
      timeToShow = ` ${
        tweetDate.toDateString().split(' ')[1]
      } ${tweetDate.getDate()}`
    }

    return timeToShow
  }

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

  // Get username from tweet id
  const getUsername = (tId) => {
    const twt = tweets.find((tweet) => tweet.id === tId)
    return twt.username
  }

  // Return 'reply to' line
  const setReplyTo = tweet => {
    const spanReply = document.createElement('span')
    const a = document.createElement('a')

    spanReply.classList.add('tweet__reply')
    spanReply.textContent = 'Replying to '

    a.classList.add('tweet__a')
    a.setAttribute('href', '#home')
    a.textContent = `@${getUsername(tweet.replyTo)}`

    spanReply.append(a)

    return spanReply
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
      tweetContent.prepend(setReplyTo(tweet))
    }
  })

  return (
    <article id={`tweet-${tweet.id}`} className='tweet' onClick={goToTweet}>
      <div className='tweet__left'>
        <img
          src={tweet.profilePic}
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
