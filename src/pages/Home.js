import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  // Check if email is found
  const [emailIsFound, setEmailIsFound] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  let result;
  let parsedResults;
  const checkEmailExists = (e) => {
    if (result !== null && e.target.value === parsedResults.email) {
      setEmailIsFound(true);
    } else {
      setEmailIsFound(false);
    }
  };

  // If no drinks are chosen, preview error message
  const noEmailFound = () => {
    setShowErrorMessage(true);
  };

  useEffect(() => {
    result = localStorage.getItem("info");
    parsedResults = JSON.parse(result);
    console.log(parsedResults);
  }, []);

  return (
    <div id="Home">
      <div className="row-1">
        <div className="gallery-slider"></div>
        <div className="order-flow-box">
          <h2>Order flow box</h2>
          <Link to="/dish">
            <button className="cta-button">Order</button>
          </Link>
        </div>
      </div>

      <div className="row-2">
        <div className="find-your-order">
          <h2>Find your order</h2>
          <p>Enter email:</p>
          <input type="email" onChange={(e) => checkEmailExists(e)}></input>

          {emailIsFound ? (
            <Link to="/findyourorder">
              <button className="cta-button">Find</button>
            </Link>
          ) : (
            <div>
              <button onClick={noEmailFound} className="cta-button">
                Find
              </button>
              <p
                style={
                  showErrorMessage ? { display: "block" } : { display: "none" }
                }
              >
                No email found
              </p>
            </div>
          )}
        </div>
        <div className="content-box">
          <p>Lorem lipsum</p>
          <p>Dollar sinar - </p>
          <h2>Content box</h2>
        </div>
      </div>
    </div>
  );
}
