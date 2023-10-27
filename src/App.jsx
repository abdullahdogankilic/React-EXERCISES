import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./Welcome";
import Counter from "./Counter";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome name="John" />} />
          <Route path="/counter" element={Counter} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
