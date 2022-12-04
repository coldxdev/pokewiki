import React from "react";
import { IPokemonCard } from "../../types/pokemon";
import Card from "../Card/Card";

interface CardsListProps {
  items: IPokemonCard[];
}

const CardsList: React.FC<CardsListProps> = ({ items = [] }) => {
  const cards = items.map((item) => {
    return (
      <Card
        name={item.name}
        id={item.id}
        img={item.img}
        types={item.types}
        key={item.id}
      />
    );
  });

  return (
    <div className="cards-list">
      {cards}
    </div>
  );
};

export default CardsList;
