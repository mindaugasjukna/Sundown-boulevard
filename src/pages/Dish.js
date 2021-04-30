import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";

export default function Dish({ setDish, dish }) {
  const [isLoading, setIsLoading] = useState(true);

  const fetchDish = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDish(data.meals[0]);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    fetchDish();
  }, []);

  return (
    <div id="Dish">
      {isLoading ? (
        <BeatLoader />
      ) : (
        <div className="col-container">
          <div className="col-1">
            <div className="img-container">
              <img src={dish.strMealThumb} alt="img"></img>
            </div>
            <div className="desc-container">
              <h2>{dish.strMeal}</h2>
              <p>Area: {dish.strArea}</p>
              <p>Category: {dish.strCategory}</p>
              <button className="cta-button" onClick={fetchDish}>
                Generate new
              </button>
            </div>
          </div>

          <div className="col-2">
            <div className="next-box">
              <p>LOREM IPSUM</p>
              <p>DOLLAR SINAR</p>
              <p>PICK SOME</p>
              <p>DRINKS NEXT</p>
              <Link to="/drinks">
                <button className="cta-button">Next</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
