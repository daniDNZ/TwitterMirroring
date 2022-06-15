import { useParams, useNavigate } from "react-router-dom";
import tweets from "../../Assets/Data/Tweets/tweets.json";
import { ReactComponent as Dots } from "../../Assets/Svg/Tweet/more-dots.svg";
import { ReactComponent as Close } from "../../Assets/Svg/Tweet/close.svg";
import TweetButtons from "../../Components/TweetButtons";
import { useEffect } from "react";

export default function ImageView() {
    // Storing params
    let { tweetId, n } = useParams();

    // Setting navigate
    const navigate = useNavigate();

    // Find the current tweet
    const tweet = tweets.find((tweet) => tweet.id === tweetId);

    let images = <></>;

    if (tweet.img !== null) {
        images = tweet.img.map((img, index) => (
            <img
                src={img}
                alt=""
                className="image-view__img"
                key={"img-" + tweet.username + index}
            />
        ));
    }

    useEffect(() => {
        // Open the image selected ( not working in chrome )
        const imageView = document.querySelector(".image-view");
        const gallery = document.querySelector(".image-view__gallery");
        gallery.scrollLeft = imageView.clientWidth * (n - 1);
    });

    return (
        <>
            <div className="image-view">
                <div className="image-view__header">
                    <button
                        className="image-view__menu"
                        onClick={() => navigate(-1, { replace: true })}
                    >
                        <Close />
                    </button>
                    <button className="image-view__close">
                        <Dots />
                    </button>
                </div>
                <div className="image-view__main">
                    <div className="image-view__gallery">{images}</div>
                </div>
                <div className="image-view__footer">
                    <TweetButtons tweet={tweet} />
                </div>
            </div>
        </>
    );
}
