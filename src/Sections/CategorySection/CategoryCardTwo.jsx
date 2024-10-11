import React from "react";
import "../CategorySection/categoryCardTwo.css";
import { cardsData } from "../../mocks/mockData";
import FlipCard from "../../components/FlipCard/FlipCard";
import { useNavigate } from "react-router-dom";

function CategoryCardTwo() {
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate(`/`, {
      
    });
  };
  return (
    <div className="categoryCardTwo mb-4">
      <div className="container">
        <div className="container-slide d-flex justify-content-between align-items-center mb-4">
          <div className="left-text">
            <h4>Trendy Books</h4>
          </div>
          <div className="right-text">
            <button className="btn" onClick={handleViewMore}>View More</button>
          </div>
        </div>
        <div className="row">
          {cardsData.slice(5, 8).map((card, index) => (
            <div className="col-lg-4 col-md-12 col-sm-12 mb-4 mt-4" key={index}>
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

export default CategoryCardTwo;
