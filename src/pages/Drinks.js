import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";

export default function Drinks({ chosenDrinks, setChosenDrinks }) {
  const [isLoading, setIsLoading] = useState(false);
  const [drinks, setDrinks] = useState([]);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const fetchDrinks = () => {
    fetch("https://api.punkapi.com/v2/beers")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setChosenDrinks([]);
        setDrinks(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const chooseDrink = (drink, e) => {
    // If drink doesnt exist in the array, put it in the array
    if (!chosenDrinks.some((drinkExists) => drinkExists.id === drink.id)) {
      setChosenDrinks((chosenDrinks) => [...chosenDrinks, drink]);

      // And color it as chosen
      e.currentTarget.style.backgroundColor = "#007ddb";

      // Else if drink do exist in the array, remove it
    } else if (
      chosenDrinks.some((drinkExists) => drinkExists.id === drink.id)
    ) {
      setChosenDrinks(
        chosenDrinks.filter((drinkExists) => drinkExists.id !== drink.id)
      );

      // And color is as not chosen
      e.currentTarget.style.backgroundColor = "";
    }
    setShowErrorMessage(false);
  };

  // If no drinks are chosen, preview error message
  const noDrinksChosen = () => {
    setShowErrorMessage(true);
  };

  useEffect(() => {
    fetchDrinks();
    //console.log(chosenDrinks);
  }, []);

  return (
    <div id="Drinks">
      {isLoading ? (
        <BeatLoader />
      ) : (
        <div className="col-container">
          <div className="col-1">
            {drinks.map((drink) => (
              <div
                className={`drink-single${drink.id}`}
                key={drink.id}
                onClick={(e) => chooseDrink(drink, e)}
              >
                <div className="img-container">
                  <img src={drink.image_url} alt="img"></img>
                </div>
                <div className="desc-container">
                  <h2>{drink.name}</h2>
                  <p>{drink.tagline}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="col-2">
            <div className="next-box">
              <p>Next pick date</p>
              <p>And amount</p>
              {chosenDrinks[0] ? (
                <Link to="/order">
                  <button className="cta-button">Next</button>
                </Link>
              ) : (
                <div onClick={() => noDrinksChosen()}>
                  <button className="cta-button">Next</button>
                  <p
                    style={
                      showErrorMessage
                        ? { display: "block" }
                        : { display: "none" }
                    }
                  >
                    Please choose a drink
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
