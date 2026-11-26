import { useState } from "react";
import { employees, departments } from "../data/employees";
import { PageHeader, Button } from "../components/ui";
import { DepartmentCard } from "../components/department";
import { EmployeeList, EmployeeDetails } from "../components/employee";
import "./EmployeeDirectoryPage.css";

// Page component: owns the state and data, and passes them down as props.
// UI components (in components/) only display what they are given.
function EmployeeDirectoryPage() {
  const [activeDept, setActiveDept] = useState(null); // department id or null
  const [favorites, setFavorites] = useState([]); // array of employee ids
  const [compact, setCompact] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const visibleEmployees = employees.filter(
    (e) => activeDept === null || e.departmentId === activeDept
  );
  const selected = employees.find((e) => e.id === selectedId);

  // These functions are passed down as props.
  const handleDepartmentSelect = (id) => setActiveDept(activeDept === id ? null : id);
  const handleToggleFavorite = (id) =>
    setFavorites((current) =>
      current.includes(id) ? current.filter((x) => x !== id) : [...current, id]
    );

  return (
    <main className="directory">
      <PageHeader
        title="Employee Directory"
        subtitle={`${employees.length} people across ${departments.length} departments.`}
      >
        <Button
          variant="secondary"
          ariaPressed={compact}
          onClick={() => setCompact(!compact)}
        >
          {compact ? "Show full cards" : "Compact view"}
        </Button>
        <Button variant="ghost" disabled={activeDept === null} onClick={() => setActiveDept(null)}>
          Clear filter
        </Button>
      </PageHeader>

      <section className="directory__section" aria-label="Departments">
        <h2>Departments</h2>
        <div className="directory__departments">
          {departments.map((dept) => (
            <DepartmentCard
              key={dept.id}
              department={dept}
              count={employees.filter((e) => e.departmentId === dept.id).length}
              isActive={activeDept === dept.id}
              onSelect={handleDepartmentSelect}
            />
          ))}
        </div>
      </section>

      {selected && (
        <EmployeeDetails
          employee={selected}
          departmentName={departments.find((d) => d.id === selected.departmentId)?.name}
          onClose={() => setSelectedId(null)}
        />
      )}

      <section className="directory__section" aria-label="Employees">
        <h2>
          Employees <span className="directory__count">({visibleEmployees.length})</span>
        </h2>
        <EmployeeList
          employees={visibleEmployees}
          departments={departments}
          favorites={favorites}
          compact={compact}
          onSelect={setSelectedId}
          onToggleFavorite={handleToggleFavorite}
        />
      </section>
    </main>
  );
}

export default EmployeeDirectoryPage;
