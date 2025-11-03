import { Link } from "react-router-dom";

export default function MovieCard() {
    return (
        <div>
            <Link to={`/movie/:id`}>Dettagli</Link>
        </div>
    )
}