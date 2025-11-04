import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center my-5">
      <h1 className="display-3 text-danger fw-bold">404</h1>
      <p className="lead">Pagina non trovata</p>
      <Link to="/" className="btn btn-primary">
        Torna alla Home
      </Link>
    </div>
  );
}
