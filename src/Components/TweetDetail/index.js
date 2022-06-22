import { useEffect } from 'react'
import getVerified from '../../Services/Utils/getVerified'
import Logos from '../../Services/Utils/Logos'
import setGallery from '../../Services/Utils/setGallery'
import TweetButtons from '../TweetButtons'

export default function TweetDetail ({ tweet }) {
  let images = <></>
  // Setting verified icon if the user is verified
  const verified = getVerified(tweet)

  // Setting time data
  const timeData = tweet => {
    const tweetDate = new Date(tweet.date)
    const time = tweetDate.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    })
    const date = ` ${
      tweetDate.toDateString().split(' ')[1]
      } ${tweetDate.getDate()}, ${tweetDate.getFullYear()}`

    return (`${time} · ${date}`)
  }

  const datetime = timeData(tweet)

  // Setting counters
  const setCounters = tweet => {
    let retweets = <></>
    let likes = <></>
    if (tweet.counters.retweets) {
      retweets = (
        <span className='t-detail__counter'>
          <b>{tweet.counters.retweets}</b> Retweets
        </span>
      )
    }
    if (tweet.counters.likes) {
      likes = (
        <span className='t-detail__counter'>
          <b>{tweet.counters.likes}</b> Likes
        </span>
      )
    }
    return { retweets, likes }
  }
  const counters = setCounters(tweet)

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
          src={tweet.profilePic}
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
