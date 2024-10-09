import React, { useState } from "react";
import "../FlipCard/flipCard.css";
import ImageFlip from "../../assets/01.jpg";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

function FlipCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div className="flip-card" onClick={handleClick}>
      <div className={`flip-card-inner ${isFlipped ? "flipped" : ""}`}>
        <div className="flip-card-front">
          <img src={ImageFlip} alt="Front" className="card-img" />
        </div>

        <div className="flip-card-back">
          <div className="card-content">
            <h1 className="card-title">Product Name</h1>
            <p className="card-description">
              This is a fantastic product that you'll love!
            </p>
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p className="card-price">$49.99</p>
            <div className="card-icons">
              <FaShoppingCart className="card-icons-shopping" />
              <FaHeart className="card-icons-heart" />
            </div>
            <button className="btn add-to-cart">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
