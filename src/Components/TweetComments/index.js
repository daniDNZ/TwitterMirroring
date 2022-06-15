export default function TweetComments({ tweet }) {
    return (
        <div className="t-comments">
            <div className="t-comments__reply">
                <img src="/img/profilepic.jpg" alt="" className="profile-pic" />
                <input
                    type="text"
                    className="t-comments__input"
                    placeholder="Tweet your reply"
                />
                <button className="t-comments__reply-btn">Reply</button>
            </div>
            <div className="t-comments__comments-container"></div>
        </div>
    );
}
