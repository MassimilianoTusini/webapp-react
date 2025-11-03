import { Link } from "react-router-dom";

export default function MovieDetail() {
    return (
        <>
            <h2>Titolo del film</h2>
            <p>Dettagli del film</p>
            <Link to="/">Torna alla home</Link>
        </>
    )
}