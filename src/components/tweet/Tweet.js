import { ReactComponent as Dots } from "../../svg/tweet/more-dots.svg";
import { ReactComponent as Verified } from "../../svg/verified.svg";
import { useEffect } from "react";
import TweetButtons from "./TweetButtons";
import { Link } from "react-router-dom";

export default function Tweet({ tweet }) {
    let verified = <></>;
    let images = <></>;
    let galleryClass;

    if (tweet.verified) {
        verified = <span className="tweet__verified">{<Verified />}</span>;
    }

    // Gallery generator
    const generateImgs = (gClass) => {
        const imgs = (
            <div className={"tweet__gallery tweet__gallery--" + gClass}>
                {tweet.img.map((img, index) => (
                    <Link
                        to={`/${tweet.username}/status/${tweet.id}/img/${
                            index + 1
                        }`}
                        className={"tweet__image-g" + gClass}
                        key={"img-" + gClass + img}
                    >
                        <img src={img} alt="" className={"tweet__image"} />
                    </Link>
                ))}
            </div>
        );
        return imgs;
    };

    // Setting gallery
    if (tweet.img !== null) {
        switch (tweet.img.length) {
            case 1:
                images = (
                    <Link to={`/${tweet.username}/status/${tweet.id}/img/1`}>
                        <img
                            src={tweet.img}
                            alt=""
                            className="tweet__image tweet__image-g1"
                        />
                    </Link>
                );
                break;
            case 2:
                galleryClass = "2";
                images = generateImgs(galleryClass);
                break;
            case 3:
                galleryClass = "3";
                images = generateImgs(galleryClass);
                break;
            case 4:
                galleryClass = "4";
                images = generateImgs(galleryClass);
                break;
            default:
                break;
        }
    } else if (tweet.gif !== null) {
        images = (
            <img
                src={tweet.gif}
                alt=""
                className="tweet__image tweet__image-g1"
            />
        );
    }

    useEffect(() => {
        // Deploying content
        const tweetContent = document.querySelector("#text-" + tweet.id);
        tweetContent.innerHTML = `
            <p class="tweet__p">
                ${tweet.content}
            </p>
        `;
    });

    return (
        <article className="tweet">
            <div className="tweet__left">
                <img
                    src={tweet.profilePic}
                    alt={tweet.name + " photo"}
                    className="tweet__profile-pic profile-pic"
                />
            </div>
            <div className="tweet__main">
                <div className="tweet__header">
                    <div className="tweet__title">
                        <span className="tweet__name">{tweet.name}</span>
                        {verified}
                        <span className="tweet__username">
                            {`@` + tweet.username}
                        </span>
                        <span className="tweet__time">{tweet.time}</span>
                    </div>
                    <button className="tweet__dots">
                        <Dots />
                    </button>
                </div>
                <div className="tweet__content">
                    <div id={"text-" + tweet.id} className="tweet__text"></div>
                    <div id={"images-" + tweet.id} className="tweet__images">
                        {images}
                    </div>
                </div>
                <TweetButtons tweet={tweet} />
            </div>
        </article>
    );
}
