import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./Welcome";
import Counter from "./Counter";
import ShowGithubUser from "./ShowGithubUser";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome name="John" />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="users/:username" element={<ShowGithubUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
