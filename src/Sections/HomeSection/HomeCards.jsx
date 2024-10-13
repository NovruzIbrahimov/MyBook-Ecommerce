import React from "react";
import "../HomeSection/homeCards.css";
import FlipCard from "../../components/FlipCard/FlipCard";
import { cardsData } from "../../mocks/mockData";

function HomeCards() {
  return (
    <div className="homeCards mb-4">
      <div className="container">
        <div className="row">
          {cardsData.map((card, index) => (
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4 mt-4" key={index}>
              <FlipCard
                id={card.id}
                imageUrl={card.imageUrl}
                title1={card.title1}
                title2={card.title2}
                price={card.price}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeCards;
