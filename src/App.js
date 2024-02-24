import { Main } from "./pages/main/Main.jsx";
import "./main.css";
// import "normalize.css";
import { Routes, Route } from "react-router-dom";
import { Welcome } from "./pages/welcome/Welcome";
import { Result } from "./pages/results/Result.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="home" element={<Main />} />
        <Route path="result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
