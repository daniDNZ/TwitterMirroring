import { useEffect } from "react";
import { ReactComponent as Dots } from "../../Assets/Svg/Tweet/more-dots.svg";
import getVerified from "../../Services/Utils/getVerified";
import TweetButtons from "../TweetButtons";

export default function TweetDetail({ tweet }) {
    // Setting verified icon if the user is verified
    const verified = getVerified(tweet);

    // Setting time data
    let time, date;
    const tweetDate = new Date(tweet.date);
    time = tweetDate.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    });
    date = ` ${
        tweetDate.toDateString().split(" ")[1]
    } ${tweetDate.getDate()}, ${tweetDate.getFullYear()}`;

    // Setting counters
    let retweets = <></>;
    let likes = <></>;
    if (tweet.counters.retweets)
        retweets = (
            <span className="t-detail__counter">
                <b>{tweet.counters.retweets}</b> Retweets
            </span>
        );
    if (tweet.counters.likes)
        likes = (
            <span className="t-detail__counter">
                <b>{tweet.counters.likes}</b> Likes
            </span>
        );

    useEffect(() => {
        const tText = document.querySelector(".t-detail__text");
        tText.innerHTML = tweet.content;
    });

    return (
        <div className="t-detail">
            <div className="t-detail__header">
                <img
                    src={tweet.profilePic}
                    alt=""
                    className="t-detail__profile-pic profile-pic"
                />
                <div className="t-detail__profile-info">
                    <div className="t-detail__name-user-container">
                        <span className="profile-info__name">
                            {tweet.name}
                            {verified}
                        </span>

                        <span className="profile-info__username">
                            {"@" + tweet.username}
                        </span>
                    </div>
                    <button className="dots">
                        <Dots />
                    </button>
                </div>
            </div>
            <div className="t-detail__text"></div>
            <div className="t-detail__media"></div>
            <div className="t-detail__data">
                {time} · {date}
            </div>
            <div className="t-detail__counters">
                {retweets}
                {likes}
            </div>
            <div className="t-detail__interaction">
                <TweetButtons
                    tweet={{
                        counters: { retweets: "", comments: "", likes: "" },
                    }}
                />
            </div>
        </div>
    );
}
