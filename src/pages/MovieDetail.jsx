import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ReviewCard from "../components/ReviewCard";

export default function MovieDetail() {

    const { id } = useParams();

    const redirect = useNavigate();

    const [movie, setMovie] = useState();

    const fetchMovie = () => {
        axios
            .get(`http://localhost:3000/api/movies/${id}`)
            .then((res) => setMovie(res.data))
            .catch((error) => {
                console.log(error);
                if (error.status === 404) redirect("/404");
            });
    };

    useEffect(fetchMovie, [id]);

    const renderReviews = () => {
        return movie?.reviews?.length > 0 ? (
            movie.reviews.map((review) => (
                <ReviewCard reviewProp={review} key={review.id} />
            ))
        ) : (
            <p className="text-muted fst-italic">Non ci sono ancora recensioni</p>
        );
    };

    return (
        <>
            <header id="movie" className="mb-3 pb-3 text-white">
                <div className="d-flex mb-3 justify-content-center">
                    <img
                        src={movie?.image}
                        alt={movie?.title}
                        className="img-fluid rounded shadow-sm"
                        style={{ maxWidth: "300px" }}
                    />
                </div>
                <h1 className="mb-2">{movie?.title}</h1>
                <h4 className="text-muted mb-3">
                    <i>Directed by {movie?.director}</i>
                </h4>
                <p>{movie?.abstract}</p>
                <p className="text-secondary">
                    Genre: <strong>{movie?.genre}</strong> - Year: <strong>{movie?.release_year}</strong>
                </p>
            </header>

            <section id="reviews">
                <header className="d-flex justify-content-between align-items-center mb-3 text-white">
                    <h4>Community reviews</h4>
                </header>
                {renderReviews()}
            </section>

            <footer className="pt-3 mt-4 d-flex justify-content-end">
                <Link className="btn btn-secondary" to="/">
                    Back to home
                </Link>
            </footer>
        </>
    );
};


