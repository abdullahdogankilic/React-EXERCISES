import React, { useState, useEffect } from "react";

function useGithubUser(username) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  async function fetchGithubUser(username) {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error);
      setData(null);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchGithubUser();
  }, [username]);

  return { data, loading, error };
}

function GithubUser({ username }) {
  return (
    <div>
      <div>
        {loading && <p>Loading...</p>}
        {error && <h1> There has been an error</h1>}
        {data && <h1> {data.name}</h1>}
      </div>
    </div>
  );
}

export default GithubUser;
