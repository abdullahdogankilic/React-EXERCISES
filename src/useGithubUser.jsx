import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

function useGithubUser(username) {
  if (!username) {
    return {
      user: null,
      isLoading: false,
      isError: null,
      onRefresh: handleRefreshUsers,
    };
  }

  const { data, error, mutate } = useSWR(
    `https://api.github.com/users/${username}`,
    fetcher
  );
  const handleRefreshUsers = () => {
    mutate();
  };
  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
    onRefresh: handleRefreshUsers,
  };
}

export default useGithubUser;
