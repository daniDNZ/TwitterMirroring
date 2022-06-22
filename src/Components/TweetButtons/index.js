import Logos from '../../Services/Utils/Logos'

export default function TweetButtons ({ tweet }) {
  return (
    <div className='tweet__buttons'>
      <button className='tweet__btn tweet-comment'>
        <div className='tweet__icon'>
          <Logos logoName='comment' />
        </div>
        <span className='tweet__count tweet-comment__count'>
          {tweet.counters.comments}
        </span>
      </button>
      <button className='tweet__btn tweet-retweet'>
        <div className='tweet__icon'>
          <Logos logoName='retweet' />
        </div>
        <span className='tweet__count tweet-retweet__count'>
          {tweet.counters.retweets}
        </span>
      </button>
      <button className='tweet__btn tweet-like'>
        <div className='tweet__icon'>
          <Logos logoName='like' />
        </div>
        <span className='tweet__count tweet-like__count'>
          {tweet.counters.likes}
        </span>
      </button>
      <button className='tweet__btn tweet-share'>
        <div className='tweet__icon'>
          <Logos logoName='share' />
        </div>
      </button>
    </div>
  )
}
