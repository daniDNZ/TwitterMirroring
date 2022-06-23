import { useParams, useNavigate } from 'react-router-dom'
import tweets from '../../Assets/Data/Tweets/tweets.json'
import TweetButtons from '../../Components/TweetButtons'
import { useEffect } from 'react'
import Logos from '../../Services/Utils/Logos'

export default function ImageView () {
  // Storing params
  const { tweetId, n } = useParams()

  // useNavigate to go back
  const navigate = useNavigate()

  // Find the current tweet
  const tweet = tweets.find((tweet) => String(tweet.id) === tweetId)

  let images = <></>

  // Generate all imgs
  if (tweet.img !== null) {
    images = tweet.img.map((img, index) => (
      <img
        src={process.env.PUBLIC_URL + img}
        alt=''
        className='image-view__img'
        key={'img-' + tweet.username + index}
      />
    ))
  }

  useEffect(() => {
    // Open the image selected ( not working in chrome )
    const imageView = document.querySelector('.image-view')
    const gallery = document.querySelector('.image-view__gallery')
    gallery.scrollLeft = imageView.clientWidth * (n - 1)
  })

  return (
    <>
      <div className='image-view'>
        <div className='image-view__header'>
          <button
            className='image-view__menu'
            onClick={() => navigate(-1, { replace: true })}
          >
            <Logos logoName='close' />
          </button>
          <button className='image-view__close'>
            <Logos logoName='dots' />
          </button>
        </div>
        <div className='image-view__main'>
          <div className='image-view__gallery'>{images}</div>
        </div>
        <div className='image-view__footer'>
          <TweetButtons tweet={tweet} />
        </div>
      </div>
    </>
  )
}
