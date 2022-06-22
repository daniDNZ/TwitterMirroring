import { ReactComponent as Bell } from '../../../Assets/Svg/bell.svg'
import { ReactComponent as House } from '../../../Assets/Svg/home.svg'
import { ReactComponent as HouseFill } from '../../../Assets/Svg/homeFill.svg'
import { ReactComponent as Lens } from '../../../Assets/Svg/lens.svg'
import { ReactComponent as Mail } from '../../../Assets/Svg/mail.svg'
import { ReactComponent as NewTweet } from '../../../Assets/Svg/newTweet.svg'
import { ReactComponent as Stars } from '../../../Assets/Svg/stars.svg'
import { ReactComponent as Verified } from '../../../Assets/Svg/verified.svg'
import { ReactComponent as Arrow } from '../../../Assets/Svg/arrow.svg'
import { ReactComponent as Dots } from '../../../Assets/Svg/Tweet/more-dots.svg'
import { ReactComponent as Close } from '../../../Assets/Svg/Tweet/close.svg'
import { ReactComponent as Comment } from '../../../Assets/Svg/Tweet/comment.svg'
import { ReactComponent as Like } from '../../../Assets/Svg/Tweet/like.svg'
import { ReactComponent as Retweet } from '../../../Assets/Svg/Tweet/retweet.svg'
import { ReactComponent as Share } from '../../../Assets/Svg/Tweet/share.svg'
import { ReactComponent as Twitter } from '../../../Assets/Svg/twitter.svg'
import { ReactComponent as Bookmark } from '../../../Assets/Svg/bookmark.svg'
import { ReactComponent as Document } from '../../../Assets/Svg/document.svg'
import { ReactComponent as Person } from '../../../Assets/Svg/person.svg'
import { ReactComponent as MoreRounded } from '../../../Assets/Svg/more-rounded.svg'
import { ReactComponent as ImageLogo } from '../../../Assets/Svg/image.svg'
import { ReactComponent as GifLogo } from '../../../Assets/Svg/gif.svg'
import { ReactComponent as Smiley } from '../../../Assets/Svg/smiley.svg'
import { ReactComponent as LocationLogo } from '../../../Assets/Svg/location.svg'

export default function Logos ({ logoName }) {
  const logos = {
    bell: <Bell />,
    house: <House />,
    houseFill: <HouseFill />,
    lens: <Lens />,
    mail: <Mail />,
    newTweet: <NewTweet />,
    stars: <Stars />,
    verified: <Verified />,
    arrow: <Arrow />,
    dots: <Dots />,
    close: <Close />,
    comment: <Comment />,
    like: <Like />,
    retweet: <Retweet />,
    share: <Share />,
    twitter: <Twitter />,
    bookmark: <Bookmark />,
    document: <Document />,
    person: <Person />,
    moreRounded: <MoreRounded />,
    image: <ImageLogo />,
    gif: <GifLogo />,
    smiley: <Smiley />,
    location: <LocationLogo />
  }

  const returned = logos[logoName]

  return returned
}
