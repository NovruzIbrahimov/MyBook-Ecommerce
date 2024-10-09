import React, { createContext, useState, useContext } from "react";
import "../context/secondaryNotificationContext.css";

const SecondaryNotificationContext = createContext();

export const useSecondaryNotification = () =>
  useContext(SecondaryNotificationContext);

export const SecondaryNotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState({
    message: "",
    visible: false,
    className: "hide",
  });

  const showSecondaryNotification = (message, delay = 500) => {
    setTimeout(() => {
      setNotification({ message, visible: true, className: "show" });

      setTimeout(() => {
        setNotification((prev) => ({ ...prev, className: "hide" }));
      }, 2500);

      setTimeout(() => {
        setNotification({ message: "", visible: false, className: "hide" });
      }, 3000);
    }, delay);
  };

  return (
    <SecondaryNotificationContext.Provider value={showSecondaryNotification}>
      {children}
      {notification.visible && (
        <div className={`secondary-notification ${notification.className}`}>
          {notification.message}
        </div>
      )}
    </SecondaryNotificationContext.Provider>
  );
};
