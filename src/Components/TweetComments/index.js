import tweets from '../../Assets/Data/Tweets/tweets.json'
import Tweet from '../Tweet'

export default function TweetComments ({ tweet }) {
  const comments = tweets.filter((t) => t.replyTo === tweet.id)

  return (
    <div className='t-comments'>
      <div className='t-comments__reply'>
        <img src='/img/profilepic.jpg' alt='' className='profile-pic' />
        <input
          type='text'
          className='t-comments__input'
          placeholder='Tweet your reply'
        />
        <button className='t-comments__reply-btn btn'>Reply</button>
      </div>
      <div className='t-comments__comments-container'>
        {comments.map((comment) => (
          <Tweet tweet={comment} key={`comment-${comment.id}`} />
        ))}
      </div>
    </div>
  )
}
