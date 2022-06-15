import { ReactComponent as Verified } from "../../../Assets/Svg/verified.svg";

// Return verified icon
export default function getVerified(tweet) {
    let verified = <></>;
    if (tweet.verified) {
        verified = <span className="tweet__verified">{<Verified />}</span>;
    }

    return verified;
}
