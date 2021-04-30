import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";

export default function Findyourorder() {
  const [savedResults, setSavedResults] = useState();
  const [isLoading, setIsLoading] = useState(true);
  let result;
  let parsedResults;

  useEffect(() => {
    result = localStorage.getItem("info");
    parsedResults = JSON.parse(result);
    setSavedResults(parsedResults);
    //console.log(savedResults);
    console.log(parsedResults);
    setIsLoading(false);
  }, [result]);
  return (
    <div id="Findyourorder">
      {isLoading ? (
        <BeatLoader />
      ) : (
        <div>
          <h2>Heres your receipt: </h2>
          <p>Dish: {savedResults.dish}</p>
          <br />

          <p>Drinks:</p>
          {savedResults.chosenDrinks.map((chosenDrink) => (
            <p key={chosenDrink.id}>{chosenDrink.name}</p>
          ))}
          <br />

          <p>Amount of people: {savedResults.peopleAmount}</p>
          <br />

          <p>Date: {savedResults.date}</p>
          <br />

          <p>By email: {savedResults.email}</p>

          <Link to="/">
            <button className="cta-button">Back to home</button>
          </Link>
        </div>
      )}
    </div>
  );
}
