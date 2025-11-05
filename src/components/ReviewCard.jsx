export default function ReviewCard({ reviewProp }) {
  const { name, vote, text, created_at } = reviewProp;

  // genera solo stelle piene in base al voto
  const renderStars = () => "⭐".repeat(vote);

  return (
    <div className="card mb-4 shadow-sm border-0">
      <div className="card-body">
        <p className="card-text mb-3">{text}</p>

        <div className="d-flex justify-content-between align-items-center">
          <div>
            <strong className="text-warning fs-5">{renderStars()}</strong>
            <br />
            <small className="text-muted">
              <i>By {name}</i>
            </small>
          </div>

          {created_at && (
            <small className="text-secondary">
              {new Date(created_at).toLocaleDateString()}
            </small>
          )}
        </div>
      </div>
    </div>
  );
}