import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/Homepage.js";
import DetailPage from "./components/DetailPage.js";
import { useEffect,useState } from "react";

function App({children,onClose}) {
  const [isDark, setIsDark] = useState(false);

  
  // const handleClose = () => {
  //   setIsBlurred(false);
  //   onClose();
  // };

  const toggleTheme = () => {
    setIsDark(!isDark);
  }

  
  return (
    <div className={`App `} data-theme={isDark ? "dark" : "light"}>
      <Router>
        <Routes>
          <Route path="/details" element={<DetailPage id={1}/>}></Route>
          <Route path="/" element={
            <HomePage
             handleToggle={toggleTheme}
               />}></Route>
        </Routes>
      </Router>
      {/* <button onClick={toggleTheme}>toggle</button> */}
    </div>
  );
}

export default App;
