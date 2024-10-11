import React, { useContext, useState } from "react";
import "../Header/header.css";
import { FaBell, FaShoppingCart, FaEnvelope, FaGlobe } from "react-icons/fa";
import CartModal from "../CartModal/CartModal";
import ProfileModal from "../ProfileModal/ProfileModal";
import ImageProfile from "../../assets/headerProfile.jpg";
import { CartContext } from "../../context/CartContext";

function Header({ toggleSidebar, isSmallScreen }) {
  const [showCartModal, setShowCartModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

  const { cartItems } = useContext(CartContext);
  const cartItemCount = cartItems.length;

  const handleCartClick = () => setShowCartModal(true);
  const handleProfileClick = () => setShowProfileModal(true);
  const closeCartModal = () => setShowCartModal(false);
  const closeProfileModal = () => setShowProfileModal(false);

  return (
    <>
      <header className="header">
        <div className="container">
          {isSmallScreen && (
            <button className="burger" onClick={toggleSidebar}>
              &#9776;
            </button>
          )}
          <div className="search-container">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
            />
          </div>

          <div className="header-right">
            <div className="icons">
              <FaGlobe className="globe-icon"/>
              <FaBell className="bell-icon" />
              <FaEnvelope className="envelope-icon" />
              <div className="cart-icon-container">
                <FaShoppingCart className="shopping-icon" onClick={handleCartClick} />
                {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
              </div>
            </div>

            <div className="profile" onClick={handleProfileClick}>
              <img
                src={ImageProfile}
                alt="Profile"
                className="profile-img rounded-circle"
              />
              <div className="profile-info">
                <span className="name">Sabina</span>
                <span className="price">150.00 Azn</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <CartModal show={showCartModal} onClose={closeCartModal} />
      <ProfileModal show={showProfileModal} onClose={closeProfileModal} />
    </>
  );
}

export default Header;
