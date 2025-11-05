import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar pb-3 shadow">
      <div className="container-fluid">
        <div className="d-flex gap-3 text-white w-100 justify-content-center">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link text-warning">
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

