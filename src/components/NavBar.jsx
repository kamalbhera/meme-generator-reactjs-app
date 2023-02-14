import React from "react";
import logo from "../images/troll-face.png";
export default function NavBar() {
  return (
    <nav>
      <img src={logo} alt="meme--logo" className="nav--image" />
      <h1 className="nav--title">Meme Generator</h1>
      <h3 className="nav--project">ReactJS Project - Meme Generator</h3>
    </nav>
  );
}
