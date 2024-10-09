import React, { createContext, useState, useContext } from "react";
import "../context/notificationContext.css";

const NotificationContext = createContext();


export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState({
    message: "",
    visible: false,
    className: "hide",
  });

  const showNotification = (message, delay = 500) => {
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
    <NotificationContext.Provider value={showNotification}>
      {children}
      {notification.visible && (
        <div className={`global-notification ${notification.className}`}>
          {notification.message}
        </div>
      )}
    </NotificationContext.Provider>
  );
};
