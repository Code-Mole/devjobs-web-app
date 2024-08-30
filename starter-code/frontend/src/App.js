import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/Homepage.js";
import DetailPage from "./components/DetailPage.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/details" element={<DetailPage />}></Route>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
