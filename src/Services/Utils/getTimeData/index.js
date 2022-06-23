// Get time data
const getTimeData = tweet => {
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

export default getTimeData
