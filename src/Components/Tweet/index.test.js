import { render, screen } from '@testing-library/react'
import Tweet from '.'
import tweets from '../../data/tweets/tweets.json'

test('renders content of the tweet', () => {
  render(<Tweet tweet={tweets[0]} />)
  const name = screen.getByText(tweets[0].name)
  const username = screen.getByText(tweets[0].username)
  expect(name).toBeInTheDocument()
  expect(username).toBeInTheDocument()
})
