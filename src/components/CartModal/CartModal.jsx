import React, { useContext } from "react";
import "../CartModal/cartModal.css";
import { Modal } from "react-bootstrap";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

function CartModal({ show, onClose, id, imageUrl, title1, title2, price }) {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const navigate = useNavigate();

  const handleViewCart = () => {
    navigate(`/cart`, {
      state: {
        id,
        imageUrl,
        title1,
        title2,
        price,
      },
    });
  };

  const handleShopNow = () => {
    navigate(`/shopNow`, {
      state: {
        id,
        imageUrl,
        title1,
        title2,
        price,
      },
    });
  };
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>All Carts</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
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
          View Cart
        </button>
        <button className="btn-shop" onClick={handleShopNow}>
          Shop now
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default CartModal;
