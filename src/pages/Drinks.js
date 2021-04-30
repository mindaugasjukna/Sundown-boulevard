import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";

export default function Drinks({ chosenDrinks, setChosenDrinks }) {
  const [isLoading, setIsLoading] = useState(true);
  const [drinks, setDrinks] = useState([]);
  const [drinkStyleActive, setDrinkStyleActive] = useState(false);
  const [style, setStyle] = useState({ backgroundColor: "" });

  const fetchDrinks = () => {
    fetch("https://api.punkapi.com/v2/beers")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
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
  };

  useEffect(() => {
    fetchDrinks();
    console.log(chosenDrinks);
  }, [chosenDrinks]);

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
                style={style}
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
              <Link to="/drinks">
                <button>Next</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
