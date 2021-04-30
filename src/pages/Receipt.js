import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Receipt({
  dish,
  chosenDrinks,
  peopleAmount,
  date,
  email,
}) {
  const receipt = {
    email: email,
    dish: dish.strMeal,
    chosenDrinks: chosenDrinks,
    peopleAmount: peopleAmount,
    date: date.toString(),
  };
  //console.log(receipt);

  useEffect(() => {
    localStorage.setItem("info", JSON.stringify(receipt));
  }, []);

  return (
    <div id="Receipt">
      <h2>Heres your receipt: </h2>
      <p>Dish: {dish.strMeal}</p>
      <br />

      <p>Drinks:</p>
      {chosenDrinks.map((chosenDrink) => (
        <p key={chosenDrink.id}>{chosenDrink.name}</p>
      ))}
      <br />

      <p>Amount of people: {peopleAmount}</p>
      <br />

      <p>Date: {date.toString()}</p>
      <br />

      <p>By email: {email}</p>

      <Link to="/">
        <button className="cta-button">Back to home</button>
      </Link>
    </div>
  );
}
