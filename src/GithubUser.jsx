// import React, { useState, useEffect } from "react";

import useGithubUser from "./useGithubUser";
const GithubUser = ({ username }) => {
  const { user, isLoading, isError } = useGithubUser(username);

  return (
    <>
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>Error</h2>}
      {user && (
        <div>
          <h2>Name: {user.name}</h2>
          <p>Login: {user.login}</p>
          <img src={user.avatar_url} alt="User Avatar" />
        </div>
      )}
    </>
  );
};

// const GithubUser = ({ username }) => {
//   // const [user, setUser] = useState(null);
//   // async function fetchGithubUser() {
//   //   try {
//   //     const response = await fetch(`https://api.github.com/users/${username}`);
//   //     const data = await response.json();
//   //     setUser(data);
//   //     console.log(data);
//   //   } catch (error) {
//   //     console.error("Error fetching data from Github API", error);
//   //   }
//   // }
//   // useEffect(() => {
//   //   fetchGithubUser();
//   // }, [username]);

//   return (
//     <div>
//       {user ? (
//         <div>
//           <h2>Name: {user.name}</h2>
//           <p>Login: {user.login}</p>
//           <img src={user.avatar_url} alt="User Avatar" />
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

export default GithubUser;
