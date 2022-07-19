import axios from "axios";
import { useState, useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUsers(response.data);
    });
  }, []);
  if (users == null) {
    return <h1>Loading</h1>;
  } else {
    return (
      <ol>
        {users.map((element) => (
          <li>
            <h2>{"Email: " + element.email}</h2>
            <h2>{"Apartment: " + element.address.suite}</h2>
          </li>
        ))}
      </ol>
    );
  }
};
export default Users;
