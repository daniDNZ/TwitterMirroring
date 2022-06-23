import Logos from '../../Services/Utils/Logos'

export default function WhatsHappening () {
  return (
    <>
      <article className='tweet wh'>
        <div className='tweet__left'>
          <img
            src={process.env.PUBLIC_URL + '/img/profilepic.jpg'}
            alt='Profile pic'
            className='tweet__profile-pic profile-pic'
          />
        </div>
        <div className='tweet__main'>
          <div className='tweet__content'>
            <input type='text' className='wh__input' placeholder="What's happening?" />
          </div>
          <div className='tweet__buttons'>
            <div className='wh__buttons'>
              <div className='wh__btn'>
                <Logos logoName='image' />
              </div>
              <div className='wh__btn'>
                <Logos logoName='gif' />
              </div>
              <div className='wh__btn'>
                <Logos logoName='smiley' />
              </div>
              <div className='wh__btn'>
                <Logos logoName='location' />
              </div>
            </div>
            <button className='wh__tweet-btn btn'>Tweet</button>
          </div>
        </div>
      </article>
    </>
  )
}
