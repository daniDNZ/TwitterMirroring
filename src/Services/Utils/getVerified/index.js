import Logos from '../Logos'

// Return verified icon
export default function getVerified (tweet) {
  let verified = <></>
  if (tweet.verified) {
    verified = <span className='tweet__verified'><Logos logoName='verified' /></span>
  }

  return verified
}
