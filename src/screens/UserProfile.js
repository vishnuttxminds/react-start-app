import { useContext } from "react";
import UserContext from "../context/UserContext";

function UserProfile() {
  const user = useContext(UserContext);

  return (
    <div style={{ border: "1px solid gray", padding: "10px" }}>
      <h2>Logged In User</h2>

      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Dept:</strong> {user.department}</p>
      <p><strong>Role:</strong> {user.role}</p>
    </div>
  );
}

export default UserProfile;
