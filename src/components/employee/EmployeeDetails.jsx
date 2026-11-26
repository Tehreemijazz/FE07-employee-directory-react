import { Avatar, Button } from "../ui";
import "./EmployeeDetails.css";

// Shows the full profile of one employee. `onClose` is a function prop.
function EmployeeDetails({ employee, departmentName, onClose }) {
  const { name, role, yearsAtCompany, skills, contact, office } = employee;

  return (
    <section className="employee-details" aria-label={`${name} profile`}>
      <Avatar name={name} size="lg" shape="square" />
      <div className="employee-details__body">
        <h2>{name}</h2>
        <p>{role} · {departmentName}</p>
        <dl>
          <dt>Email</dt><dd>{contact.email}</dd>
          <dt>Phone</dt><dd>{contact.phone}</dd>
          <dt>Office</dt><dd>{office.city}, floor {office.floor}</dd>
          <dt>Years here</dt><dd>{yearsAtCompany}</dd>
          <dt>Skills</dt><dd>{skills.join(", ")}</dd>
        </dl>
      </div>
      <Button variant="secondary" size="sm" onClick={onClose}>Close</Button>
    </section>
  );
}

export default EmployeeDetails;
