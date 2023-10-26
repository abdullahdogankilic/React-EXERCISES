import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./Welcome";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome name="John" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
