import { Avatar, Button } from "../ui";
import "./EmployeeCard.css";

/**
 * One reusable card, many employees.
 * Props:
 *  - employee (object)       data to show
 *  - departmentName (string)
 *  - isFavorite (boolean)    changes the appearance
 *  - compact (boolean)       smaller layout without skills
 *  - onSelect / onToggleFavorite (functions) callbacks to the parent
 * Props are read-only: this component never changes them. To change a
 * favourite, it calls the parent's function and the parent updates its state.
 */
function EmployeeCard({
  employee,
  departmentName,
  isFavorite = false,
  compact = false,
  onSelect,
  onToggleFavorite,
}) {
  // Destructuring an object prop
  const { id, name, role, status, skills, office } = employee;

  const className = [
    "employee-card",
    compact ? "employee-card--compact" : "",
    isFavorite ? "employee-card--favorite" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={className}>
      <div className="employee-card__top">
        <Avatar name={name} size={compact ? "sm" : "md"} />
        <div className="employee-card__info">
          <h3 className="employee-card__name">{name}</h3>
          <p className="employee-card__role">{role}</p>
          {departmentName && <p className="employee-card__dept">{departmentName}</p>}
        </div>
      </div>

      {!compact && (
        <>
          <p className="employee-card__meta">
            <span className={`status status--${status.replace(" ", "-").toLowerCase()}`}>
              {status}
            </span>
            {office.city}, floor {office.floor}
          </p>
          <ul className="employee-card__skills">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </>
      )}

      <div className="employee-card__actions">
        <Button size="sm" onClick={() => onSelect(id)}>
          View profile
        </Button>
        <Button
          size="sm"
          variant="secondary"
          ariaPressed={isFavorite}
          onClick={() => onToggleFavorite(id)}
        >
          {isFavorite ? "Favorited" : "Favorite"}
        </Button>
      </div>
    </article>
  );
}

export default EmployeeCard;
