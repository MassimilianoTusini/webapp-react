import { Link } from "react-router-dom";

export default function MovieCard({ movieProp }) {

    const { id, title, director, genre, release_year, image } = movieProp;

    return (
        <div className=" card shadow bg-dark h-100 text-light pt-3">
            {image && (
                <div
                    className="d-flex align-items-center justify-content-center"
                    style={{ height: "390px", overflow: "hidden" }}
                >
                    <img
                        src={image}
                        alt={title}
                        className="img-fluid"
                        style={{
                            maxHeight: "100%",
                            maxWidth: "100%",
                        }}
                    />
                </div>
            )}

            <div className="card-body d-flex flex-column justify-content-between">
                <div>
                    <h5 className="card-title fw-bold text-warning mb-2">{title}</h5>
                    <p className="card-text text-light mb-1">
                        <strong>Regista:</strong> {director}
                    </p>
                    <p className="card-text text-secondary small mb-3">
                        {genre} - {release_year}
                    </p>

                </div>
                <div className="mt-3">
                    <Link to={`/movie/${id}`} className="btn btn-warning text-dark fw-semibold w-100">
                        Dettagli
                    </Link>
                </div>
            </div>
        </div>
    );
}
