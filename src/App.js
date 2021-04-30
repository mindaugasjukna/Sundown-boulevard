import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Dish from "./pages/Dish";
import Drinks from "./pages/Drinks";
import Navbar from "./components/Navbar";

function App() {
  const [dish, setDish] = useState();
  const [chosenDrinks, setChosenDrinks] = useState([]);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path="/" render={() => <Home />} />
        <Route
          path="/dish"
          render={() => <Dish setDish={setDish} dish={dish} />}
        />
        <Route
          path="/drinks"
          render={() => (
            <Drinks
              setChosenDrinks={setChosenDrinks}
              chosenDrinks={chosenDrinks}
            />
          )}
        />
      </Router>
    </div>
  );
}

export default App;
