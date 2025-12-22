
import Team from "./Team.js";

function Department({ employee }) {
  return (
    <div>
      <h2>Department Component</h2>

      <Team employee={employee} />
    </div>
  );
}

export default Department;
