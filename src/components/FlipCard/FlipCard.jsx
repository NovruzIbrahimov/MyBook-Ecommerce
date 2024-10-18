import React, { useContext, useState } from "react";
import "../FlipCard/flipCard.css";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useNotification } from "../../context/NotificationContext";

function FlipCard({id, imageUrl, title1, title2, price, quantity}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();
  const showNotification = useNotification();

  const { addToCart } = useContext(CartContext);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleViewBook = () => {
    navigate(`/detail/${id}`, {
      state: {
        id,
        imageUrl,
        title1,
        title2,
        price,
        quantity,
      },
    });
  };

  const handleAddToCart = (e) => {
    e.stopPropagation(); 
    addToCart({ id, imageUrl, title1, title2, price, quantity });
    showNotification("Kitab səbətə əlavə edildi!", 1000);
  };

  return (
    <div className="flip-card" onClick={handleClick}>
      <div className={`flip-card-inner ${isFlipped ? "flipped" : ""}`}>
        <div className="flip-card-front">
          <img src={imageUrl} alt="Front" className="card-img" />
        </div>

        <div className="flip-card-back">
          <div className="card-content">
            <h1 className="card-title">{title1}</h1>
            <p className="card-description">
              {title2}
            </p>
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p className="card-price">{price} Azn</p>
            <div className="card-icons">
              <FaShoppingCart className="card-icons-shopping" onClick={handleAddToCart}/>
              <FaHeart className="card-icons-heart" />
            </div>
            <button className="btn add-to-cart" onClick={handleViewBook}>View Book</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
