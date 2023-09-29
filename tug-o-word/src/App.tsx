import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AboutPage } from "./components/pages/AboutPage";
import { HomePage } from "./components/pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
