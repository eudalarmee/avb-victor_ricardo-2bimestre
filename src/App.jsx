
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Detalhes from "./Pages/Detalhes";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalhes" element={<Detalhes />} />
      </Routes>
    </Router>
  );
}

