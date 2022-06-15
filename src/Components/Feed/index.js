import Tweet from "../Tweet";
import tweets from "../../Assets/Data/Tweets/tweets.json";
import { ReactComponent as NewTweet } from "../../Assets/Svg/newTweet.svg";

export default function Feed() {
    return (
        <>
            <div className="show-tweets">
                <button className="show-tweets__btn">
                    <span className="show-tweets__span">Show 34 Tweets</span>
                </button>
            </div>
            <div className="feed">
                {tweets.map((tweet) => (
                    <Tweet tweet={tweet} key={tweet.id} />
                ))}
                <button className="new-tweet">
                    <NewTweet />
                </button>
            </div>
        </>
    );
}
