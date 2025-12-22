// Team.js
import Employee from "./Employee";

function Team({ employee }) {
  return (
    <div>
      <h3>Team Component</h3>

      <Employee employee={employee} />
    </div>
  );
}

export default Team;
