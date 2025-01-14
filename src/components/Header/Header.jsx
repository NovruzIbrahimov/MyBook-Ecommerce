import React, { useContext, useState } from "react";
import "../Header/header.css";
import { FaBell, FaShoppingCart, FaEnvelope, FaGlobe } from "react-icons/fa";
import CartModal from "../CartModal/CartModal";
import ProfileModal from "../ProfileModal/ProfileModal";
import ImageProfile from "../../assets/headerProfile.jpg";
import { CartContext } from "../../context/CartContext";
import i18n from "../../i18n";
import AzerbaijanFlag from "../../assets/flags/azeri.png";
import EnglandFlag from "../../assets/flags/englandd.png";
import RussiaFlag from "../../assets/flags/rus.png";
import TurkeyFlag from "../../assets/flags/turkey.png";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { useLoading } from "../../context/LoadingContext";

function Header({ toggleSidebar, isSmallScreen }) {
  const { t } = useTranslation();
  const [showLangOptions, setShowLangOptions] = useState(false);
  const navigate = useNavigate();
  const { isLoading, startLoading, stopLoading } = useLoading();

  const languages = [
    { code: "az", flag: AzerbaijanFlag },
    { code: "en", flag: EnglandFlag },
    { code: "ru", flag: RussiaFlag },
    { code: "tr", flag: TurkeyFlag },
  ];

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    localStorage.setItem("i18nextLng", langCode);
    setShowLangOptions(false);
  };

  const [showCartModal, setShowCartModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

  const { cartItems } = useContext(CartContext);
  const cartItemCount = cartItems.length;

  const handleCartClick = () => setShowCartModal(true);
  const handleProfileClick = () => setShowProfileModal(true);
  const closeCartModal = () => setShowCartModal(false);
  const closeProfileModal = () => setShowProfileModal(false);
  const handleLinkClick = (to, isLoading) => {
    if (isLoading) {
      startLoading();
    }
    setTimeout(
      () => {
        navigate(to);
        if (isLoading) {
          stopLoading();
        }
        if (isSmallScreen) {
          toggleSidebar();
        }
      },
      isLoading ? 500 : 0
    );
  };
  const handleLogoClick = () => {
    handleLinkClick("/", true);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <Link
            to="/"
            className="sidebar-logo-container d-flex align-items-center"
            onClick={handleLogoClick}
            style={{ textDecoration: "none", color: "inherit" }} 
          >
            <img
              src="https://png.pngtree.com/png-vector/20240515/ourmid/pngtree-open-book-logo-png-image_12467719.png"
              alt="Logo"
              className="sidebar-logo"
              style={{
                width: "40px",
                height: "40px",
                marginRight: "10px",
              }}
            />
            <span
              className="logo-text"
              style={{
                fontWeight: "bold",
                fontSize: "1.2rem",
                fontFamily: "Macondo",
                color: "#fff",
              }}
            >
              Eazy.az
            </span>
          </Link>
          {isSmallScreen && (
            <button className="burger" onClick={toggleSidebar}>
              &#9776;
            </button>
          )}
          <div className="search-container d-flex align-items-center">
            <input
              type="text"
              className="form-control"
              placeholder={t("header.placeholder")}
            />
            <button className="search-btn">Search</button>
          </div>

          <div className="header-right">
            <div className="icons">
              <FaGlobe
                className="globe-icon"
                onClick={() => setShowLangOptions(!showLangOptions)}
              />
              {showLangOptions && (
                <div className="language-options">
                  {languages.map((lang) => (
                    <img
                      key={lang.code}
                      src={lang.flag}
                      alt={`Flag of ${lang.code}`}
                      className="language-option"
                      onClick={() => changeLanguage(lang.code)}
                      style={{
                        cursor: "pointer",
                        width: "24px",
                        height: "19px",
                        margin: "0 5px",
                      }}
                    />
                  ))}
                </div>
              )}
              <FaBell className="bell-icon" />
              <FaEnvelope className="envelope-icon" />
              <div className="cart-icon-container">
                <FaShoppingCart
                  className="shopping-icon"
                  onClick={handleCartClick}
                />
                {cartItemCount > 0 && (
                  <span className="cart-count">{cartItemCount}</span>
                )}
              </div>
            </div>

            <div className="profile" onClick={handleProfileClick}>
              <img
                src={ImageProfile}
                alt="Profile"
                className="profile-img rounded-circle"
              />
              <div className="profile-info">
                <span className="name">Welcome</span>
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
