import React from "react";
import "../Sidebar/sidebar.css";
import "../SidebarNavItem/sidebarNavItem.css";
import SidebarNavItem from "../SidebarNavItem/SidebarNavItem";
import { Link } from "react-router-dom";

function Sidebar({ isOpen, toggleSidebar, isSmallScreen }) {
  return (
    <div
      className={`sidebar ${isOpen ? "open" : "closed"} ${
        isSmallScreen ? "small-screen" : ""
      }`}
    >
      <div className="sidebar-content">
        <Link to="/">
          <img
            src="src/assets/eazyaz.png"
            alt="Logo"
            className="sidebar-logo"
          />
        </Link>

        <button className="burger-btn" onClick={toggleSidebar}>
          &#9776; {/* Burger icon */}
        </button>

        {isOpen && (
          <div className="menu-items">
            <h3>MAIN PAGES</h3>
            <SidebarNavItem />
            <div className="text-center mt-auto bottom-part">
              <img
                src="https://templates.iqonic.design/booksto-dist/html/assets/images/page-img/side-bkg.png"
                className="img-fluid mb-5"
              />
              <button className="btn">Become Membership</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
