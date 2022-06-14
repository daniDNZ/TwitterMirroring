import Feed from "../../components/feed/Feed";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";

export default function Home() {
    return (
        <div id="home" className="home">
            <Header />
            <Feed />
            <Navbar />
        </div>
    );
}
