import EmployeeCard from "./EmployeeCard";
import "./EmployeeList.css";

/**
 * Receives an array of employees and renders one EmployeeCard for each.
 * Same component, different data on every pass.
 */
function EmployeeList({
  employees,
  departments,
  favorites = [],
  compact = false,
  emptyMessage = "No employees found.",
  onSelect,
  onToggleFavorite,
}) {
  if (employees.length === 0) {
    return <p className="employee-list__empty">{emptyMessage}</p>;
  }

  return (
    <div className={`employee-list ${compact ? "employee-list--compact" : ""}`}>
      {employees.map((employee) => {
        const department = departments.find((d) => d.id === employee.departmentId);
        return (
          <EmployeeCard
            key={employee.id}
            employee={employee}
            departmentName={department?.name}
            isFavorite={favorites.includes(employee.id)}
            compact={compact}
            onSelect={onSelect}
            onToggleFavorite={onToggleFavorite}
          />
        );
      })}
    </div>
  );
}

export default EmployeeList;
