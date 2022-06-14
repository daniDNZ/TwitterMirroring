import { ReactComponent as Comment } from "../../svg/tweet/comment.svg";
import { ReactComponent as Retweet } from "../../svg/tweet/retweet.svg";
import { ReactComponent as Like } from "../../svg/tweet/like.svg";
import { ReactComponent as Share } from "../../svg/tweet/share.svg";

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
