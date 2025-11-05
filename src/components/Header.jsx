export default function Header() {
  return (
    <header className="bg-dark text-center pt-3">
      <h1
        className="fw-bold"
        style={{
          fontSize: "3.5rem",
          letterSpacing: "2px",
        }}
      >
        <span className="text-warning">POPCORN</span>
        <span className="text-light">HUB</span>
      </h1>
      <p className="text-secondary fst-italic mt-2">
        Scopri film e recensioni dal nostro database
      </p>
    </header>
  );
}
