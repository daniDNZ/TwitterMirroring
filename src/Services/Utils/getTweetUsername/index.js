import tweets from '../../../Assets/Data/Tweets/tweets.json'

// Get username from tweet id
const getTweetUsername = (tId) => {
  const twt = tweets.find((tweet) => tweet.id === tId)
  return twt.username
}

export default getTweetUsername
