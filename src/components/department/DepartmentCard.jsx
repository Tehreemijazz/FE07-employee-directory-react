import "./DepartmentCard.css";

/**
 * Clickable department summary.
 * `department.color` is used to style each card differently.
 */
function DepartmentCard({ department, count = 0, isActive = false, onSelect }) {
  const { id, name, description, color } = department;

  return (
    <button
      type="button"
      className={`dept-card ${isActive ? "dept-card--active" : ""}`}
      style={{ "--dept-color": color }}
      aria-pressed={isActive}
      onClick={() => onSelect(id)}
    >
      <span className="dept-card__name">{name}</span>
      <span className="dept-card__desc">{description}</span>
      <span className="dept-card__count">
        {count} {count === 1 ? "person" : "people"}
      </span>
    </button>
  );
}

export default DepartmentCard;
