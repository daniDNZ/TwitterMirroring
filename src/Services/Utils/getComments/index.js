import tweets from '../../../Assets/Data/Tweets/tweets.json'

// Get comments from a tweet
const getComments = tweet => {
  const comments = tweets.filter((t) => t.replyTo === tweet.id)
  return comments
}

export default getComments
