import { Link } from 'react-router-dom'

// Gallery generator
const generateImgs = (tweet, gClass) => {
  const imgs = (
    <div className={'tweet__gallery tweet__gallery--' + gClass}>
      {tweet.img.map((img, index) => (
        <Link
          to={`/${tweet.username}/status/${tweet.id}/img/${
                            index + 1
                        }`}
          className={'tweet__image-g' + gClass}
          key={'img-' + gClass + img}
        >
          <img src={process.env.PUBLIC_URL + img} alt='' className='tweet__image' />
        </Link>
      ))}
    </div>
  )
  return imgs
}

// Setting gallery
export default function setGallery (tweet) {
  let galleryClass
  let images = <></>

  if (tweet.img !== null) {
    switch (tweet.img.length) {
      case 1:
        images = (
          <Link to={`/${tweet.username}/status/${tweet.id}/img/1`}>
            <img
              src={process.env.PUBLIC_URL + tweet.img}
              alt=''
              className='tweet__image tweet__image-g1'
            />
          </Link>
        )
        break
      case 2:
        galleryClass = '2'
        images = generateImgs(tweet, galleryClass)
        break
      case 3:
        galleryClass = '3'
        images = generateImgs(tweet, galleryClass)
        break
      case 4:
        galleryClass = '4'
        images = generateImgs(tweet, galleryClass)
        break
      default:
        break
    }
  } else if (tweet.gif !== null) {
    images = (
      <img
        src={process.env.PUBLIC_URL + tweet.gif}
        alt=''
        className='tweet__image tweet__image-g1'
      />
    )
  }

  return images
}
