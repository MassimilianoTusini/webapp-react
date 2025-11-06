import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ReviewCard from "../components/ReviewCard";
import ReviewForm from "../components/ReviewForm";
import { useGlobal } from "../contexts/GlobalContext";

export default function MovieDetail() {

    const { setIsLoading } = useGlobal()
    const { id } = useParams();
    const redirect = useNavigate();
    const [movie, setMovie] = useState();

    const fetchMovie = () => {
        setIsLoading(true);

        setTimeout(() => {
        axios
            .get(`http://localhost:3000/api/movies/${id}`)
            .then((res) => setMovie(res.data))
            .catch((error) => {
                console.error(error);
                if (error.response?.status === 404) redirect("/404");
            })
            .finally(() => { setIsLoading(false) })
        }, 1000)
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
        <div className="container py-5 text-light">
            {movie && (
                <div className="row g-4 justify-content-center">

                    <div className="col-12 col-md-4 d-flex justify-content-center">
                        <div
                            className="poster-wrapper shadow-lg rounded overflow-hidden"
                            style={{
                                maxWidth: "320px"
                            }}
                        >
                            <img
                                src={movie.image}
                                alt={movie.title}
                                className="img-fluid"
                                style={{
                                    width: "100%",
                                    height: "460px",
                                    objectFit: "contain",
                                    backgroundColor: "#000",
                                }}
                            />
                        </div>
                    </div>


                    <div className="col-12 col-md-8">
                        <h2 className="fw-bold text-warning mb-3">{movie.title}</h2>
                        <h5 className="text-light mb-3">
                            <i>Diretto da: {movie.director}</i>
                        </h5>

                        <p className="lead text-light opacity-75 mb-4">{movie.abstract}</p>

                        <p className="text-secondary mb-3">
                            <strong>Genere:</strong> {movie.genre} <br />
                            <strong>Anno:</strong> {movie.release_year}
                        </p>

                        <Link
                            to="/"
                            className="btn btn-outline-warning mt-3 px-4 fw-semibold"
                        >
                            Torna alla Home
                        </Link>
                    </div>
                </div>
            )}

            <section id="reviews" className="mt-5">
                <header className="d-flex justify-content-between align-items-center mb-4 border-bottom border-secondary pb-2">
                    <h4 className="text-warning mb-0">Recensioni della Community</h4>
                </header>
                <div className="row">
                    <div className="col-12 col-md-10 mx-auto">
                        {renderReviews()}
                        {movie && (
                            <ReviewForm movieId={movie.id} reloadReviews={fetchMovie} />
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
