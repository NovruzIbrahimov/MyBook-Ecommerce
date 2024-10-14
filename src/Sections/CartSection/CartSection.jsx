import React, { useContext } from "react";
import "../CartSection/cartSection.css";
import { CartContext } from "../../context/CartContext";
import { MdDeleteForever } from "react-icons/md";
import { useTranslation } from "react-i18next";

function CartSection() {
  const {t} = useTranslation();
  const { cartItems, incrementQuantity, decrementQuantity, removeFromCart } =
    useContext(CartContext);

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
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
            <div className="row justify-content-end mt-4">
              <div className="col-12 col-md-4 text-end total-price-section">
                <h4>Total: {getTotalPrice().toFixed(2)} Azn</h4>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartSection;
