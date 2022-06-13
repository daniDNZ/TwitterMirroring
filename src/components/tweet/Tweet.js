import { ReactComponent as Dots } from '../../svg/tweet/more-dots.svg';
import { ReactComponent as Comment } from '../../svg/tweet/comment.svg';
import { ReactComponent as Retweet } from '../../svg/tweet/retweet.svg';
import { ReactComponent as Like } from '../../svg/tweet/like.svg';
import { ReactComponent as Share } from '../../svg/tweet/share.svg';
import { ReactComponent as Verified } from '../../svg/verified.svg';
import { useEffect } from 'react';

export default function Tweet({tweet}) {

    let verified = <></>;
    let images = <></>;
    let galleryClass;

    if (tweet.verified) {
        verified = <span className="tweet__verified">{<Verified />}</span>
    }

    // Gallery generator
    const generateImgs = (gClass) => {
        const imgs = 
            <div className={"tweet__gallery tweet__gallery--"+gClass}>
            {   
                tweet.img.map(img => <img src={img} alt='' className={"tweet__image tweet__image-g"+gClass} key={"img-"+gClass+img}/>)
            }
            </div>
        return imgs;
    }

    // Setting gallery
    if (tweet.img !== null) {
        switch (tweet.img.length) {
            case 1:
                images = <img src={tweet.img} alt='' className="tweet__image tweet__image-g1" />
                break;
            case 2:
                galleryClass = '2';
                images = generateImgs(galleryClass);
                break;
            case 3:
                galleryClass = '3';
                images = generateImgs(galleryClass);
                break;
            case 4:
                galleryClass = '4';
                images = generateImgs(galleryClass);
                break;
            default:
                break;
        }
    } else if(tweet.gif !== null) {
        images = <img src={tweet.gif} alt='' className="tweet__image tweet__image-g1" />
            // <iframe src={tweet.gif} title={"gif tweet "+tweet.id} frameBorder="0" className="tweet__gif"></iframe>
    }

    useEffect(() => {
        // Deploying content
        const tweetContent = document.querySelector('#text-'+tweet.id);
        tweetContent.innerHTML = `
            <p class="tweet__p">
                ${tweet.content}
            </p>
        `;
    })

    return (
        <article className="tweet">
            <div className="tweet__left">
                <img src={tweet.profilePic} alt={tweet.name+' photo'} className="tweet__profile-pic profile-pic" />
            </div>
            <div className="tweet__main">
                <div className="tweet__header">
                    <div className="tweet__title">
                        <span className="tweet__name">{tweet.name}</span>
                        {
                            verified
                        }
                        <span className="tweet__username">{tweet.username}</span>
                        <span className="tweet__time">{tweet.time}</span>
                    </div>
                    <button className="tweet__dots">
                        <Dots />
                    </button>
                </div>
                <div className="tweet__content">
                    <div id={'text-'+tweet.id} className="tweet__text">

                    </div>
                    <div id={'images-'+tweet.id} className="tweet__images">
                        {images}
                    </div>
                </div>
                <div className="tweet__buttons">
                    <button className="tweet__btn tweet-comment">
                        <div className="tweet__icon">
                            <Comment />
                        </div>
                        <span className="tweet__count tweet-comment__count">{tweet.counters.comments}</span>
                    </button>
                    <button className="tweet__btn tweet-retweet">
                        <div className="tweet__icon">
                            <Retweet />
                        </div>
                        <span className="tweet__count tweet-retweet__count">{tweet.counters.retweets}</span>
                    </button>
                    <button className="tweet__btn tweet-like">
                        <div className="tweet__icon">
                            <Like />
                        </div>
                        <span className="tweet__count tweet-like__count">{tweet.counters.likes}</span>
                    </button>
                    <button className="tweet__btn tweet-share">
                        <div className="tweet__icon">
                            <Share />
                        </div>
                    </button>
                </div>
            </div>
        </article>
    )
}