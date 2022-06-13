import Tweet from "../tweet/Tweet";
import tweets from '../../data/tweets/tweets.json';


export default function Feed() {
    return (
            <>
                <div className="show-tweets">
                    <button className="show-tweets__btn">
                        <span className="show-tweets__span">
                            Show 34 Tweets
                        </span>
                    </button>
                </div>
                <div className="feed">
                    {
                        tweets.map(tweet => <Tweet tweet={tweet} key={tweet.id}/>)
                    }
                </div>
            </>
    );
}
