/*import { useState } from "react";

function App() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    function handleSubmit(event) {
        event.preventDefault(); //Prevent page from refreshing
        alert(
            "Registration Successful!\n\n" +
            "Name: " + name + "\n" +
            "Email: " + email
        );
    }
    return (
        <div>
            <h2>Student Registration</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <br />
                <input
                    type="text"
                    value={name}
                    onChange={(event) =>
                        setName(event.target.value)
                    }
                    placeholder="Enter your name"
                />
                <br />
                <br />
                <label>Email:</label>
                <br />
                <input
                    type="email"
                    value={email}
                    onChange={(event) =>
                        setEmail(event.target.value)
                    }
                    placeholder="Enter your email"
                />
                <br />
                <br />
                <button type="submit">
                    Submit
                </button>
            </form>
            <p>Student Name: {name}</p>
            <p>Student Email: {email}</p>
        </div>
    );
}
export default App;*/

import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div>
      <h1>User List</h1>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;