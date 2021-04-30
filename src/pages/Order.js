import React, { useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import DateTimePicker from "react-datetime-picker";
import validator from "validator";
import { Link } from "react-router-dom";

export default function Order({
  peopleAmount,
  setPeopleAmount,
  date,
  setDate,
  email,
  setEmail,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [emailValid, setEmailValid] = useState(false);

  // Date booking
  var today = new Date();
  const onChangeDate = (date) => {
    setDate(date);
  };

  // Amount of people to book
  const decrementCount = () => {
    if (peopleAmount > 1) {
      setPeopleAmount((prevCount) => prevCount - 1);
    }
  };

  const incrementCount = () => {
    if (peopleAmount < 10) {
      setPeopleAmount((prevCount) => prevCount + 1);
    }
  };

  // Email validation

  const validateEmail = (e) => {
    var email = e.target.value;
    setEmail(email);
    //console.log(email);

    if (validator.isEmail(email)) {
      setEmailError("");
      setEmail(email);
    } else {
      setEmailError("Please enter a valid email");
      setEmail("");
    }
  };

  return (
    <div id="Order">
      {isLoading ? (
        <BeatLoader />
      ) : (
        <div className="col-container">
          <div className="col-1">
            <h2>Order header</h2>
            <p>Pick time and date</p>
            <DateTimePicker
              onChange={onChangeDate}
              value={date}
              minDate={today}
            />
            <p>{date.toLocaleDateString()}</p>
            <p>{date.toLocaleTimeString()}</p>
          </div>

          <div className="col-2">
            <div>
              <p>Select amount of people</p>
              <button onClick={decrementCount}>-</button>
              <span>{peopleAmount}</span>
              <button onClick={incrementCount}>+</button>
            </div>
            <div>
              <input
                type="text"
                id="userEmail"
                onChange={(e) => validateEmail(e)}
              ></input>
              <p>{emailError}</p>
              {email !== "" ? (
                <Link to="/receipt">
                  <button className="cta-button">Next</button>
                </Link>
              ) : (
                <button
                  onClick={(e) => validateEmail(e)}
                  className="cta-button"
                >
                  Next
                </button>
              )}
              {}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
