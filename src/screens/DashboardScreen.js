
import React, { useEffect , useState} from "react";
import { createUser, getUsers } from "../services/userService";

const DashboardScreen = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getUsers()
      .then((response) => {
        console.log("getUsers response.data:", response.data);
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);


    const addUser = async () => {
    try {
      const custUser = {
        name: "Vishnu",
        email: "vishnu@test.com",
      };

      const response = await createUser(custUser);
      setUsers((prev) => [...prev, response.data]);
    } catch (err) {
      console.error(err);
    }
  };


  return (
   <div>
      <h2>Dashboard Screen</h2>
  <button onClick={addUser}>Add User</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardScreen;
