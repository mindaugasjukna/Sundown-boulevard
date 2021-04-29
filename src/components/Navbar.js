import React from "react";
import logo from "../img/logo.png";
export default function Navbar() {
  return (
    <div id="Navbar">
      <img src={logo} alt="logo"></img>
      <h3>Restauranter</h3>
      <h3>Produkter</h3>
      <h3>Nyhedsbrev</h3>
      <h3>Kontakt</h3>
    </div>
  );
}
