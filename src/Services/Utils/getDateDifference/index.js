// Get date or time difference between tweet.date and now

export default function getDateDifference (tweet) {
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
