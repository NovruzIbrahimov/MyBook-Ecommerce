import React, { useContext } from "react";
import "../CartModal/cartModal.css";
import { Modal } from "react-bootstrap";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useTranslation } from "react-i18next";
import { useLoading } from "../../context/LoadingContext";
import {  DotLoader } from "react-spinners";

function CartModal({ show, onClose, id, imageUrl, title1, title2, price }) {
  const { t } = useTranslation();
  const { cartItems, removeFromCart } = useContext(CartContext);
  const { isLoading, startLoading, stopLoading } = useLoading();

  const navigate = useNavigate();

  const handleViewCart = () => {
    startLoading();
    setTimeout(() => {
    navigate(`/cart`, {
      state: {
        id,
        imageUrl,
        title1,
        title2,
        price,
      },
    });
    stopLoading();
  }, 3000);
  };

  const handleShopNow = () => {
    startLoading();
    setTimeout(() => {
    navigate(`/shopNow`, {
      state: {
        id,
        imageUrl,
        title1,
        title2,
        price,
      },
    });
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
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{t("cartModal.carts")}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartItems.length === 0 ? (
          <p>{t("cartModal.cart")}</p>
        ) : (
          cartItems.map((item, index) => (
            <div
              key={index}
              className="cart-item d-flex justify-content-between align-items-center mb-3"
            >
              <div className="d-flex align-items-center">
                <img src={item.imageUrl} className="cart-image" />
                <div className="cart-item-text">
                  <h6 className="mb-0">{item.title1}</h6>
                  <p className="mb-0">{item.price} Azn</p>
                </div>
              </div>
              <button
                className="remove"
                onClick={() => removeFromCart(item.id)}
              >
                <MdDeleteForever />
              </button>
            </div>
          ))
        )}
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-start">
        <button className="btn-view mr-2" onClick={handleViewCart}>
        {t("cartModal.view")}
        </button>
        <button className="btn-shop" onClick={handleShopNow}>
        {t("cartModal.shop")}
        </button>
      </Modal.Footer>
    </Modal>
    </div>
  );
}

export default CartModal;
