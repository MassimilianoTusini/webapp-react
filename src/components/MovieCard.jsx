import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
    return (
        <div>
            <h3>{movie.title}</h3>
            <p>{movie.director}</p>
            <p>{movie.genre}</p>
            <p>{movie.release_year}</p>
            <Link to={`/movie/${movie.id}`}>Dettagli</Link>
        </div>
    )
}