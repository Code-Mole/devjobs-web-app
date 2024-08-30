import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/Homepage.js";
import DetailPage from "./components/DetailPage.js";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    alert("Toggle")
    setTheme(theme === 'light' ? 'dark' : 'light'); // toggle between light and dark theme
  };
  return (
    <div className={`App ${theme}`}>
      <Router>
        <Routes>
          <Route path="/details" element={<DetailPage />}></Route>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </Router>
      <button onClick={toggleTheme}>toggle</button>
    </div>
  );
}

export default App;
