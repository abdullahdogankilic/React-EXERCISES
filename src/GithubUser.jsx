import useGithubUser from "./useGithubUser";

function GithubUser({ username }) {
  const { data, loading, error } = useGithubUser(username);
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
