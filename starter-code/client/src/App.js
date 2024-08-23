import "./App.css";
import {BrowserRouter as Router ,Route ,Routes} from "react-router-dom";
import HomePage from "./Components/HomePage.js";
import DetailsPage from "./Components/Detailed.js";

function App() {
  return(
   <div className="App">
<Router>
<Routes>
  <Route path="/details" element={<DetailsPage/>}></Route>
  <Route path="/" element={<HomePage/>}></Route>
</Routes>
</Router>
  </div>);
}

export default App;
