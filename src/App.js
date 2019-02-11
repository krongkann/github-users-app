import React, { useState } from "react";
import ReactDOM from "react-dom";
import Form from "./components/Form";
import CardList from "./components/CardList";
import _ from "lodash";

const App = () => {
  const [cards, setCards] = useState([]);

  const addNewCard = cardInfo => {
    setCards(cards.concat(cardInfo));
  };
  const removeCard = cardInfo => {
    setCards(_.drop(cards));
  };

  return (
    <div>
      <Form onSubmit={addNewCard} rem />
      <button onClick={removeCard}>Remove Card</button>
      <CardList cards={cards} onclick={removeCard} />
    </div>
  );
};
export default App;
