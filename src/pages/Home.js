import Feed from "../components/Feed";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function Home() {
    return(
        <div id="home">
            <Header />
            <Feed />
            <Navbar />
        </div>
    )
}