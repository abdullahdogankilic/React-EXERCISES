import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Welcome from "./Welcome";
import Counter from "./Counter";
import ShowGithubUser from "./ShowGithubUser";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Link to="/">App</Link>|<Link to="/counter">Counter</Link>|
          <Link to="/users/abdullahdogankilic">Show Github User</Link>
        </div>
        <Routes>
          <Route path="/" element={<Welcome name="John" />} />
          <Route
            path="/counter"
            element={<Counter Value={2} increment={1} decrement={5} />}
          />
          <Route path="users/:username" element={<ShowGithubUser />} />
          <Route
            path="*"
            element={
              <div>
                <p>Not Fount</p>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
