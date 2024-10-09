import React, { useState } from "react";
import "../Header/header.css";
import { FaBell, FaShoppingCart, FaEnvelope, FaGlobe } from "react-icons/fa";
import CartModal from "../CartModal/CartModal";
import ProfileModal from "../ProfileModal/ProfileModal";
import ImageProfile from "../../assets/headerProfile.jpg";

function Header({ toggleSidebar, isSmallScreen }) {
  const [showCartModal, setShowCartModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

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
              <FaGlobe />
              <FaBell className="icon" />
              <FaEnvelope className="icon" />
              <div className="cart-icon-container">
                <FaShoppingCart className="icon" onClick={handleCartClick} />
                <span className="cart-count">0</span>{" "}
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
