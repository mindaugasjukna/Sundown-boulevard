import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Home />
      </Router>
    </div>
  );
}

export default App;
