import React from "react";
import Card from "./Card.js";

const CardList = props => (
  <div>
    {props.cards.map(card => (
      <Card key={card} {...card} />
    ))}
  </div>
);

export default CardList;
