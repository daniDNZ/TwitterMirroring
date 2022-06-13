import { useParams } from "react-router-dom"

export default function ImageView() {
    const { username, tweet, n} = useParams();
    console.log(username, tweet, n);
    return (
        <>
        <h1>hola</h1>
        </>
    )
}