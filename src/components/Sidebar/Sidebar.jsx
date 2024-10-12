import React from "react";
import "../Sidebar/sidebar.css";
import SidebarNavItem from "../SidebarNavItem/SidebarNavItem";

function Sidebar({ isOpen, toggleSidebar, isSmallScreen }) {
  return (
    <div
      className={`sidebar ${isOpen ? "open" : "closed"} ${
        isSmallScreen ? "small-screen" : ""
      }`}
    >
      <div className="sidebar-content">
        <img
          src="https://e7.pngegg.com/pngimages/142/76/png-clipart-white-and-orange-book-logo-symbol-yellow-orange-logo-ibooks-orange-logo.png"
          alt="Logo"
          className="sidebar-logo"
        />
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
