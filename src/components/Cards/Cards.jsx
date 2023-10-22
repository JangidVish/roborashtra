import React from "react";
// Page containg all the 4 cards

// importing card instance
import Card from "./Card/Card";
// importing csss
import "./Cards.css";

// content for each cards
const content = [
  { title: "Robowar", text: "this is s....", link: "", img: "" },
  { title: "", text: "", link: "", img: "" },
];

const Cards = () => {
  return (
    <div>
      {content.map((event) => {
        // create multiple Card
        return (
            <div className="root">
          <div className="before-element">
          <img src = {img} alt="" srcset=""/>
          </div>
          
          <div className="headDesc">
            <h1>{title}</h1>
            <p className="desc">
              {text}
              <span><a href={link}>&nbsp;&nbsp;Read more...</a></span>
            </p>
          </div>
        </div>
        );
      })}
    </div>
  );
};

export default Cards;
