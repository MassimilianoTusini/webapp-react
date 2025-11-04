import axios from "axios";
import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard";

export default function Home() {

    const [movies, setMovies] = useState([]);

    const fecthBooks = () => {
        axios.get('http://localhost:3000/api/movies')
            .then(res => setMovies(res.data))
            .catch(err => { console.log(err) })
    }

    useEffect(fecthBooks, []);

    const renderMovies = () => {
        return movies.map(movie => {
            return (
                <div className="col" key={movie.id}>
                    <MovieCard movieProp={movie} />
                </div>
            )
        })
    }

    return (
        <>
            <h2 className="text-center text-secondary mb-4">
                <i>Scopri film e recensioni dal nostro database</i>
            </h2>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {movies.length > 0 ? (
                    renderMovies()
                ) : (
                    <p className="text-center text-muted">Nessun film disponibile</p>
                )}
            </div>
        </>
    );
}
