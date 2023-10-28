import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Welcome from "./Welcome";
import Counter from "./Counter";
import GithubUsers from "./GithubUsersList ";
import ShowGithubUser from "./ShowGithubUser";
import { SWRConfig } from "swr";
const fetcher = (url) => fetch(url).then((response) => response.json());
function App() {
  return (
    <div>
      <SWRConfig value={{ fetcher }}>
        <BrowserRouter>
          <div>
            <Link to="/">App</Link> | <Link to="/counter">Counter</Link> | |
            <Link to="/users">users</Link>
          </div>
          <Routes>
            <Route path="/" element={<Welcome name="John" />} />
            <Route
              path="/counter"
              element={<Counter Value={2} increment={1} decrement={5} />}
            />
            <Route path="/users/:username" element={<ShowGithubUser />} />
            <Route path="/users" element={<GithubUsers />} />

            <Route
              path="*"
              element={
                <div>
                  <p>Not Found</p>
                </div>
              }
            />
          </Routes>
        </BrowserRouter>
      </SWRConfig>
    </div>
  );
}

export default App;
