import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

const useGithubUser = (username) => {
  const { data, error } = useSWR(
    `https://api.github.com/users/${username}`,
    fetcher
  );

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useGithubUser;
