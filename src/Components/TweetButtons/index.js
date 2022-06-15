import { ReactComponent as Comment } from "../../Assets/Svg/Tweet/comment.svg";
import { ReactComponent as Retweet } from "../../Assets/Svg/Tweet/retweet.svg";
import { ReactComponent as Like } from "../../Assets/Svg/Tweet/like.svg";
import { ReactComponent as Share } from "../../Assets/Svg/Tweet/share.svg";

export default function TweetButtons({ tweet }) {
    return (
        <div className="tweet__buttons">
            <button className="tweet__btn tweet-comment">
                <div className="tweet__icon">
                    <Comment />
                </div>
                <span className="tweet__count tweet-comment__count">
                    {tweet.counters.comments}
                </span>
            </button>
            <button className="tweet__btn tweet-retweet">
                <div className="tweet__icon">
                    <Retweet />
                </div>
                <span className="tweet__count tweet-retweet__count">
                    {tweet.counters.retweets}
                </span>
            </button>
            <button className="tweet__btn tweet-like">
                <div className="tweet__icon">
                    <Like />
                </div>
                <span className="tweet__count tweet-like__count">
                    {tweet.counters.likes}
                </span>
            </button>
            <button className="tweet__btn tweet-share">
                <div className="tweet__icon">
                    <Share />
                </div>
            </button>
        </div>
    );
}
