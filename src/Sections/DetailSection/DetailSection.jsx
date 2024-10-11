import React, { useContext } from "react";
import "../DetailSection/detailSection.css";
import { CartContext } from "../../context/CartContext";
import { Link, useLocation } from "react-router-dom";
import { useNotification } from "../../context/NotificationContext";
import {
  FaFacebookF,
  FaPinterestP,
  FaStar,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function DetailSection() {
  const location = useLocation();
  const book = location.state;
  const { addToCart } = useContext(CartContext);
  const showNotification = useNotification();

  if (!book) {
    return <div>Book not found!</div>;
  }

  const handleAddToCart = () => {
    addToCart(book);
    showNotification("Kitab səbətə əlavə edildi!", 1000);
  };
  return (
    <div className="detailSection mt-4 mb-4">
      <div className="container mt-4 mb-4">
        <Link to="/category">
          <p className="link-p">Back to home page</p>
        </Link>
        <h4 className="detail-text pb-3">Books Description</h4>
        <div className="row">
          <div className="col-lg-5 col-md-12 col-sm-12 d-flex flex-column align-items-stretch detail-left-description">
            <div className="row">
              <div className="col-4 d-flex flex-column justify-content-between detail-left-description-left">
                <img
                  src={book.imageUrl}
                  className="img-thumbnail sidebar-img mb-2"
                  alt="Book 1"
                />
                <img
                  src={book.imageUrl}
                  className="img-thumbnail sidebar-img mb-2"
                  alt="Book 2"
                />
                <img
                  src={book.imageUrl}
                  className="img-thumbnail sidebar-img mb-2"
                  alt="Book 3"
                />
              </div>
              <div className="col-8 d-flex align-items-center detail-left-description-right">
                <img
                  src={book.imageUrl}
                  className="img-fluid main-img"
                  alt="Featured Book"
                />
              </div>
            </div>
          </div>

          <div className="col-lg-7 col-md-12 col-sm-12 d-flex flex-column justify-content-between detail-right-description">
            <h3>{book.title1}</h3>
            <p className="text-muted">
              <strong>{book.price} Azn</strong>
            </p>
            <div className="stars mb-2">
              {[...Array(5)].map((_, index) => (
                <span key={index} className="fa fa-star checked">
                  <FaStar />
                </span>
              ))}
            </div>
            <p>
              The best book testem ipsum Monthering, simply everything printing
              to bring to an end and printing to find the end.in the printing
              industry and is a test to find in the printing industry.
            </p>
            <p className="text-muted-add">
              <strong>Author:</strong> {book.title2}
            </p>
            <div className="d-flex gap-2 mt-2">
              <button className="btn-one me-2" onClick={handleAddToCart}>
                Add To Cart
              </button>
              <button className="btn-two">Read Sample</button>
            </div>
            <div className="mt-3">
              <button className="btn-three me-2">Add to Wishlist</button>
            </div>
            <div className="mt-3">
              <span className="icon">Share:</span>
              <i className="btn-link-facebook">
                <FaFacebookF />
              </i>
              <i className="btn-link-twitter ms-2">
                <FaTwitter />
              </i>
              <i className="btn-link-youtube ms-2">
                <FaYoutube />
              </i>
              <i className="btn-link-pinterest ms-2">
                <FaPinterestP />
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailSection;
