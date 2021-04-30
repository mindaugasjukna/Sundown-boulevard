import React from "react";
import { Link } from "react-router-dom";

export default function Receipt({
  dish,
  chosenDrinks,
  peopleAmount,
  date,
  email,
}) {
  //localStorage.setItem(email);

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

      <p>Date: {date.toLocaleDateString()}</p>
      <p>Time: {date.toLocaleTimeString()}</p>
      <br />

      <p>By email: {email}</p>

      <Link exact to="/">
        <button className="cta-button">Back to home</button>
      </Link>
    </div>
  );
}
