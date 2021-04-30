import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Dish from "./pages/Dish";
import Drinks from "./pages/Drinks";
import Order from "./pages/Order";
import Navbar from "./components/Navbar";

function App() {
  const [dish, setDish] = useState();
  const [chosenDrinks, setChosenDrinks] = useState([]);
  const [peopleAmount, setPeopleAmount] = useState(1);
  const [date, setDate] = useState(new Date());
  const [email, setEmail] = useState("");

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
        <Route
          path="/order"
          render={() => (
            <Order
              peopleAmount={peopleAmount}
              setPeopleAmount={setPeopleAmount}
              date={date}
              setDate={setDate}
              email={email}
              setEmail={setEmail}
            />
          )}
        />
      </Router>
    </div>
  );
}

export default App;
