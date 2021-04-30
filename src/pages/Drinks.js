import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";

export default function Drinks({ setDrinks, drinks }) {
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    fetchDrinks();
  }, []);

  return (
    <div id="Drinks">
      {isLoading ? (
        <BeatLoader />
      ) : (
        <div className="col-container">
          <div className="col-1">
            {drinks.map((drink) => (
              <div className="drink-single" key={drink.id}>
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
