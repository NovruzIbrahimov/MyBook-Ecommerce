import React from "react";
import "../CartModal/cartModal.css";
import { Modal } from "react-bootstrap";
import ImageCartModal from "../../assets/01.jpg"
import { MdDeleteForever } from "react-icons/md";

function CartModal({ show, onClose }) {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>All Carts</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div
          className="cart-item d-flex justify-content-between align-items-center mb-3"
        >
          <div className="d-flex align-items-center">
            <img src={ImageCartModal}  className="cart-image" />
            <div className="cart-item-text">
              <h6 className="mb-0">Text 1</h6>
              <p className="mb-0">100 Azn</p>
            </div>
          </div>
          <button className="remove">
            <MdDeleteForever />
          </button>
        </div>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-start"> 
        <button className="btn-view mr-2">View Cart</button> 
        <button className="btn-shop">Shop now</button>
      </Modal.Footer>
    </Modal>
  );
}

export default CartModal;
