import Navbar from "../../Components/Navbar";
import { ReactComponent as Arrow } from "../../Assets/Svg/arrow.svg";
import tweets from "../../Assets/Data/Tweets/tweets.json";
import { useNavigate, useParams } from "react-router-dom";
import TweetDetail from "../../Components/TweetDetail";
import TweetComments from "../../Components/TweetComments";

export default function TweetView() {
    const { tweetId } = useParams();
    const navigate = useNavigate();
    const tweet = tweets.find((tweet) => tweet.id === tweetId);
    return (
        <>
            <div className="tweet-view">
                <div className="tweet-view__header">
                    <button
                        className="tweet-view__go-back"
                        onClick={() => navigate(-1)}
                    >
                        <Arrow />
                    </button>
                    <h2 className="tweet-view__h2">Tweet</h2>
                    <button className="tweet-view__open-app">Open app</button>
                </div>
                <div className="tweet-view__main">
                    <div className="tweet-view__tweet">
                        <TweetDetail tweet={tweet} />
                    </div>
                    <div className="tweet-view__comments">
                        <TweetComments tweet={tweet} />
                    </div>
                </div>
            </div>
            <Navbar homeFill={false} />
        </>
    );
}
