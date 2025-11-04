import { Link } from "react-router-dom";

export default function MovieCard({ movieProp }) {

    const { id, title, director, genre, release_year, image } = movieProp;

    return (
        <div className="border-0 shadow-lg h-100 bg-dark text-light">
            {image && (
                <div>
                    <img
                        src={image}
                        alt={title}
                        className="card-img-top"
                        // style={{ height: "350px", width:"100%"}}
                    />
                </div>
            )}
            <div className="card-body d-flex flex-column justify-content-between">
                <div>
                    <h5 className="card-title fw-bold text-warning mb-2">{title}</h5>
                    <p className="card-text text-muted mb-1">
                        <strong className="text-light">Regista:</strong> {director}
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
