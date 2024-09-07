import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/Homepage.js";
import DetailPage from "./components/DetailPage.js";
import { useState } from "react";
import useLocalStorage from "use-local-storage";
import Headling from "./components/Headling.js";

function App({ children, onClose }) {
  const [isDark, setIsDark] = useLocalStorage("isDark", false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <Headling toggleTheme={toggleTheme} />
      <Router>
        <Routes>
          <Route path="/details" element={<DetailPage id={1} />}></Route>
          <Route
            path="/"
            element={<HomePage handleToggleTheme={toggleTheme} />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
