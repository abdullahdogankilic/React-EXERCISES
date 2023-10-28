import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

function useGithubUser(username) {
  if (!username) {
    return {
      user: null,
      isLoading: false,
      isError: null,
    };
  }

  const { data, error } = useSWR(
    `https://api.github.com/users/${username}`,
    fetcher
  );
  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useGithubUser;
