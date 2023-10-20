import React, { useState, useEffect } from "react";
import GithubUser from "./GithubUser";

const GithubUsers = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

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

  const handleUserClick = (username) => {
    setSelectedUser(username);
  };

  return (
    <div>
      <h1>Github Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => handleUserClick(user.login)}>
            <h4>{user.login}</h4>
          </li>
        ))}
      </ul>
      {selectedUser && <GithubUser username={selectedUser} />}
    </div>
  );
};

export default GithubUsers;
