import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Card from "./components/Card.js";
import DetailPage from "./components/DetailPage.js";
import { useState } from "react";
import useLocalStorage from "use-local-storage";
import Headling from "./components/Headling.js";


function App() {
  const [isDark, setIsDark] = useLocalStorage("isDark", false);
  

  const toggleTheme = () => {
    setIsDark(!isDark);
  };



  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <Headling toggleTheme={toggleTheme} />
      <Router>
        <Routes>
          <Route
            path="/"
            element={ <Card  />}
          ></Route>
          <Route path="/details/:id" element={<DetailPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
