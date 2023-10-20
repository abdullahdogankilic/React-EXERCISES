import React, { useState, useEffect } from "react";

const GithubUser = ({ username }) => {
  const [user, setUser] = useState(null);

  async function fetchGithubUser() {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      setUser(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data from Github API", error);
    }
  }
  useEffect(() => {
    fetchGithubUser();
  }, [username]);

  return (
    <div>
      {user ? (
        <div>
          <h2>Name: {user.name}</h2>
          <p>Login: {user.login}</p>
          <img src={user.avatar_url} alt="User Avatar" />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default GithubUser;
