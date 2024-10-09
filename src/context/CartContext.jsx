import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex((i) => i.id === item.id);
      if (itemIndex > -1) {
        const newItems = [...prevItems];
        newItems[itemIndex].quantity += 1;
        return newItems;
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => {
      const newItems = prevItems.filter((item) => item.id !== itemId);
      return newItems;
    });
  };

  const incrementQuantity = (itemId) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex((i) => i.id === itemId);
      if (itemIndex > -1) {
        const newItems = [...prevItems];
        newItems[itemIndex].quantity += 1;
        return newItems;
      }
      return prevItems;
    });
  };

  const decrementQuantity = (itemId) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex((i) => i.id === itemId);
      if (itemIndex > -1) {
        const newItems = [...prevItems];
        if (newItems[itemIndex].quantity > 1) {
          newItems[itemIndex].quantity -= 1;
        } else {
          newItems.splice(itemIndex, 1);
        }
        return newItems;
      }
      return prevItems;
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
