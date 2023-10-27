import React, { useState, useEffect } from "react";
import GithubUser from "./GithubUser";
import { Link } from "react-router-dom";

const GithubUsers = () => {
  const [users, setUsers] = useState([]);
  // const [selectedUser, setSelectedUser] = useState(null);

  async function fetchGithubUsers() {
    try {
      const response = await fetch("https://api.github.com/users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching data from Github API", error);
    }
  }
  useEffect(() => {
    fetchGithubUsers();
  }, []);

  // const handleUserClick = (username) => {
  //   setSelectedUser(username);
  // };

  return (
    <div>
      <div>
        <h2>Github Users List</h2>
        <p>Add a user and select it</p>
      </div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.login}`}>{user.login}</Link>
          </li>
        ))}
      </ul>
      {/* {selectedUser && <GithubUser username={selectedUser} />} */}
    </div>
  );
};

export default GithubUsers;
