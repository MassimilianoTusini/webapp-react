import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar bg-dark px-2">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand text-white fw-bold">
          PopCornHub
        </Link>

        <div className="d-flex gap-3 text-white">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            Chi siamo
          </Link>
          <Link to="/contact" className="nav-link">
            Contatti
          </Link>
        </div>
      </div>
    </nav>
  );
}

