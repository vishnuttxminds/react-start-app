
function Employee({ employee }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px" }}>
      <h4>Employee Details</h4>

      <p><strong>ID:</strong> {employee.id}</p>
      <p><strong>Name:</strong> {employee.name}</p>
      <p><strong>Role:</strong> {employee.role}</p>
      <p><strong>Department:</strong> {employee.department}</p>
    </div>
  );
}

export default Employee;
