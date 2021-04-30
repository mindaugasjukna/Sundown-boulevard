import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
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
          <input type="text" placeholder="Insert email here"></input>
          <button className="cta-button">Find</button>
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
