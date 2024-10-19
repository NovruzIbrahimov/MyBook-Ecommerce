import React, { useContext, useState } from "react";
import "../FlipCard/flipCard.css";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useNotification } from "../../context/NotificationContext";
import {  DotLoader } from "react-spinners";
import { useLoading } from "../../context/LoadingContext";

function FlipCard({ id, imageUrl, title1, title2, price, quantity }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const { isLoading, startLoading, stopLoading } = useLoading();
  const navigate = useNavigate();
  const showNotification = useNotification();

  const { addToCart } = useContext(CartContext);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleViewBook = () => {
    startLoading();
    setTimeout(() => {
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
      stopLoading();
    }, 3000);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    startLoading();
    addToCart({ id, imageUrl, title1, title2, price, quantity });
    showNotification("Kitab səbətə əlavə edildi!", 1000);
    setTimeout(() => {
      stopLoading();
    }, 3000);
  };

  return (
    <div>
      {isLoading && (
        <div className="loading-overlay">
          <DotLoader color="#3aafa9" size={70} loading={isLoading} />
        </div>
      )}

      <div className="flip-card" onClick={handleClick}>
        <div className={`flip-card-inner ${isFlipped ? "flipped" : ""}`}>
          <div className="flip-card-front">
            <img src={imageUrl} alt="Front" className="card-img" />
          </div>

          <div className="flip-card-back">
            <div className="card-content">
              <h1 className="card-title">{title1}</h1>
              <p className="card-description">{title2}</p>
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p className="card-price">{price} Azn</p>
              <div className="card-icons">
                <FaShoppingCart
                  className="card-icons-shopping"
                  onClick={handleAddToCart}
                />
                <FaHeart className="card-icons-heart" />
              </div>
              <button className="btn add-to-cart" onClick={handleViewBook}>
                View Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
