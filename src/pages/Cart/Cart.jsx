import React from "react";
import "../Cart/cart.css";
import CartSection from "../../Sections/CartSection/CartSection";

function Cart() {
  return (
    <div className="cart">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <CartSection />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
