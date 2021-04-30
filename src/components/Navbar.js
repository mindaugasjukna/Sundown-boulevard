import React from "react";
import logo from "../img/logo.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div id="Navbar">
      <NavLink exact to="/">
        <img src={logo} alt="logo"></img>
      </NavLink>
      <li>Restauranter</li>
      <li>Produkter</li>
      <li>Nyhedsbrev</li>
      <li>Kontakt</li>
    </div>
  );
}
