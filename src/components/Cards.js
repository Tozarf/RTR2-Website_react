import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC collections!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/astronaut.jpg"
              text="My favorite edits"
              label="Photshop"
              path="/services"
            />
            <CardItem
              src="images/portrait-1.jpg"
              text="Check out my portraits porfolio"
              label="Portraits"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Mexico"
              label="Landscapes"
              path="/services"
            />
            <CardItem
              src="images/ecuador-1.jpg"
              text="Ecuador"
              label="Landscapes"
              path="/products"
            />
            <CardItem
              src="images/bnw-1.jpg"
              text="My B&W portfolio"
              label="B&W"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
