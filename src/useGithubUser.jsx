import { useState, useEffect } from "react";

export default function useGithubUser(username) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchGithubUser() {
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
    if (username) {
      fetchGithubUser();
    }
  }, [username]);

  return { data, loading, error };
}
