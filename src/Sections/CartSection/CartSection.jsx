import React, { useContext } from "react";
import "../CartSection/cartSection.css";
import { CartContext } from "../../context/CartContext";
import { MdDeleteForever } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useLoading } from "../../context/LoadingContext";
import { DotLoader } from "react-spinners";

function CartSection() {
  const { t } = useTranslation();
  const { cartItems, incrementQuantity, decrementQuantity, removeFromCart } =
    useContext(CartContext);
  const navigate = useNavigate();
  const { isLoading, startLoading, stopLoading } = useLoading();

  const handleConfirm = () => {
    startLoading();
    setTimeout(() => {
      navigate(`/shopNow`, {
        
      });
      stopLoading();
    }, 3000);
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div>
      {isLoading && (
        <div className="loading-overlay">
          <DotLoader color="#3aafa9" size={70} loading={isLoading} />
        </div>
      )}
      <div className="cartSection">
        <div className="container">
          <h2 className="text-center mb-4">{t("cartSection.shoppingCart")}</h2>
          {cartItems.length === 0 ? (
            <p className="text-center">{t("cartSection.emptyCart")}</p>
          ) : (
            <>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="row align-items-center text-center cart-row"
                >
                  <div className="col-2 product-image">
                    <img
                      src={item.imageUrl}
                      alt="product"
                      className="img-fluid"
                    />
                  </div>

                  <div className="col-2 product-name">
                    <p className="cart-name">{item.title1}</p>
                  </div>

                  <div className="col-2 product-price">
                    <p className="cart-price">{item.price.toFixed(2)} Azn</p>
                  </div>

                  <div className="col-2 product-quantity">
                    <button
                      className="btn btn-outline-first"
                      onClick={() => decrementQuantity(item.id)}
                    >
                      -
                    </button>
                    <button className="btn btn-light">{item.quantity}</button>
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => incrementQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>

                  <div className="col-2 product-subtotal">
                    <p className="total-price">
                      {(item.price * item.quantity).toFixed(2)} Azn
                    </p>
                  </div>

                  <div className="col-2 product-remove">
                    <button
                      className="btn btn-remove"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <MdDeleteForever />
                    </button>
                  </div>
                </div>
              ))}

              <div className="cartSection-bottom-section mt-4 text-center">
                <div className="row justify-content-center align-items-center cartSection-bottom-row">
                  <div className="col-12 col-md-4 text-center cartSection-product-count">
                    <p>
                      {t("cartSection.totalItems")}: {getTotalItems()}
                    </p>
                  </div>
                  <div className="col-12 col-md-4 text-center cartSection-total-price">
                    <h4>
                      {t("cartSection.totalPrice")}:{" "}
                      {getTotalPrice().toFixed(2)} Azn
                    </h4>
                  </div>
                  <div className="col-12 col-md-4 text-center cartSection-button">
                    <button className="btn" onClick={handleConfirm}>
                      {t("cartSection.confirmOrder")}
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartSection;
