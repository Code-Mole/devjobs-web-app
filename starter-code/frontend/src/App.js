import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/Homepage.js";
import DetailPage from "./components/DetailPage.js";
import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  }

  
  return (
    <div className={`App `} data-theme={isDark ? "dark" : "light"}>
      <Router>
        <Routes>
          <Route path="/details" element={<DetailPage />}></Route>
          <Route path="/" element={<HomePage handleToggle={toggleTheme}/>}></Route>
        </Routes>
      </Router>
      {/* <button onClick={toggleTheme}>toggle</button> */}
    </div>
  );
}

export default App;
