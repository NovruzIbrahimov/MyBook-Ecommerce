import React from "react";
import "../Sidebar/sidebar.css";
import { Link } from "react-router-dom";

function Sidebar({ isOpen, toggleSidebar, isSmallScreen }) {
  return (
    <div
      className={`sidebar ${isOpen ? "open" : "closed"} ${
        isSmallScreen ? "small-screen" : ""
      }`}
    >
      <div className="sidebar-content">
        {!isSmallScreen && (
          <button className="burger-btn" onClick={toggleSidebar}>
            &#9776; {/* Burger icon */}
          </button>
        )}

        {isOpen && (
          <div className="menu-items">
            <ul>
            <li>
                <Link to="/" onClick={toggleSidebar}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/category" onClick={toggleSidebar}>
                  Category
                </Link>
              </li>
              <li>
                <Link to="/book" onClick={toggleSidebar}>
                  Books
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
