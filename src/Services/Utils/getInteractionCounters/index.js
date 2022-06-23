// Get counters
const getInteractionCounters = tweet => {
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
export default getInteractionCounters
