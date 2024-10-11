// import React, { useContext } from "react";
// import "../CartSection/cartSection.css";
// import { CartContext } from "../../context/CartContext";
// import { MdDeleteForever } from "react-icons/md";

// function CartSection() {
//   const { cartItems, incrementQuantity, decrementQuantity, removeFromCart } =
//     useContext(CartContext);

//   const getTotalPrice = () => {
//     return cartItems.reduce(
//       (total, item) => total + item.price * item.quantity,
//       0
//     );
//   };
//   return (
//     <div className="cartSection">
//       <div className="container">
//         <h2 className="text-center mb-4">Shopping Cart</h2>
//         {cartItems.length === 0 ? (
//           <p className="text-center">Your cart is empty</p>
//         ) : (
//           cartItems.map((item) => (
//             <div key={item.id} className="row cart-item align-items-center">
//               {/* Image */}
//               <div className="col-lg-2 col-md-2 col-sm-2 col-2  image-container">
//                 <img src={item.imageUrl} alt="Product" className="img-fluid" />
//               </div>

//               {/* Product Title */}
//               <div className="col-lg-3 col-md-2 col-sm-2 col-2">
//                 <h5>{item.title1}</h5>
//               </div>

//               {/* Product Price */}
//               <div className="col-lg-2 col-md-2 col-sm-2 col-3">
//                 <h5 className="cart-price">{item.price.toFixed(2)} Azn</h5>
//               </div>

//               {/* Quantity Controls */}
//               <div className="col-lg-3 col-md-2 col-sm-2 col-1">
//                 <div className="btn-group">
//                   <button
//                     className="btn btn-outline-secondary"
//                     onClick={() => decrementQuantity(item.id)}
//                   >
//                     -
//                   </button>
//                   <button className="btn btn-light">{item.quantity}</button>
//                   <button
//                     className="btn btn-outline-secondary"
//                     onClick={() => incrementQuantity(item.id)}
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>

//               {/* Total Price and Remove Button */}
//               <div className="col-lg-2 col-md-4 col-sm-4 col-4 d-flex align-items-center">
//                 <h5 className="total-price">
//                   {(item.price * item.quantity).toFixed(2)} Azn
//                 </h5>
//                 <button
//                   className="btn btn-remove"
//                   onClick={() => removeFromCart(item.id)}
//                 >
//                   <MdDeleteForever />
//                 </button>
//               </div>
//             </div>
//           ))
//         )}

//         {/* Overall Total Price */}
//         <div className="row mt-4">
//           <div className="col-lg-10 col-md-10 col-sm-8 col-8"></div>
//           <div className="col-lg-2 col-md-2 col-sm-4 col-4 overall-total">
//             <h4>Total: {getTotalPrice().toFixed(2)} Azn</h4>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CartSection;

import React, { useContext } from "react";
import "../CartSection/cartSection.css";
import { CartContext } from "../../context/CartContext";
import { MdDeleteForever } from "react-icons/md";

function CartSection() {
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
        <h2 className="text-center mb-4">Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p className="text-center">Your cart is empty</p>
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
