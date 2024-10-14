import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import './i18n.js';
import { CartProvider } from "./context/CartContext";
import { NotificationProvider } from "./context/NotificationContext";
import { SecondaryNotificationProvider } from "./context/SecondaryNotificationContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SecondaryNotificationProvider>
    <NotificationProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </NotificationProvider>
  </SecondaryNotificationProvider>
);
