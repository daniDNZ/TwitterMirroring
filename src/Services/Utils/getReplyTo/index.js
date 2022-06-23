import getTweetUsername from '../getTweetUsername'

// Return 'reply to' line
const getReplyTo = tweet => {
  const spanReply = document.createElement('span')
  const a = document.createElement('a')

  spanReply.classList.add('tweet__reply')
  spanReply.textContent = 'Replying to '

  a.classList.add('tweet__a')
  a.setAttribute('href', '#home')
  a.textContent = `@${getTweetUsername(tweet.replyTo)}`

  spanReply.append(a)

  return spanReply
}

export default getReplyTo
