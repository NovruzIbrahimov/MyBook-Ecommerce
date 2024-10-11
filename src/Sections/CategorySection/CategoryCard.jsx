import React from "react";
import "../CategorySection/categoryCard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FlipCard from "../../components/FlipCard/FlipCard";
import { cardsData } from "../../mocks/mockData";

function CategoryCard() {
  return (
    <div className="categoryCard mb-4">
      <div className="container">
        <div className="row">
          {cardsData.map((card, index) => (
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4 mt-4" key={index}>
              <FlipCard 
              id={card.id}
              imageUrl={card.imageUrl}
              title1={card.title1}
              title2={card.title2}
              price={card.price}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
