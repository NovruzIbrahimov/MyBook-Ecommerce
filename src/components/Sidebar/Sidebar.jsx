import React, { useEffect, useState } from "react";
import "../Sidebar/sidebar.css";
import { Link } from "react-router-dom";
import {
  FaBook,
  FaChevronRight,
  FaHome,
  FaRegUserCircle,
} from "react-icons/fa";
import { RiAdminLine, RiPagesLine } from "react-icons/ri";
import { Collapse, Nav } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function Sidebar({ isOpen, toggleSidebar, isSmallScreen }) {
  const [openItem, setOpenItem] = useState(null);
  const {t} = useTranslation();

  const navItems = [
    {
      id: "home",
      icon: FaHome,
      text: t("sidebar.home"),
      to: "/",
      collapseId: "home-collapse",
    },
    {
      id: "category",
      icon: RiAdminLine,
      text: t("sidebar.category"),
      to: "/category",
      collapseId: "category-collapse",
    },
    {
      id: "book",
      icon: FaBook,
      text: t("sidebar.books"),
      to: "/book",
      collapseId: "book-collapse",
    },
    {
      id: "edition",
      icon: RiAdminLine,
      text: t("sidebar.edition"),
      collapseId: "admin-collapse",
      subItems: [
        { text: t("sidebar.azerbaijani"), href: "#" },
        { text: t("sidebar.turkish"), href: "#" },
        { text: t("sidebar.english"), href: "#" },
        { text: t("sidebar.russian"), href: "#" },
      ],
    },
    {
      id: "genre",
      icon: FaRegUserCircle,
      text: t("sidebar.genres"),
      collapseId: "user-collapse",
      subItems: [
        { text: t("sidebar.detective"), href: "#" },
        { text: t("sidebar.philosophy"), href: "#" },
        { text: t("sidebar.mysticism"), href: "#" },
        { text: t("sidebar.novel"), href: "#" },
      ],
    },
    {
      id: "author",
      icon: RiPagesLine,
      text: t("sidebar.writers"),
      collapseId: "elements-collapse",
      subItems: [
        { text: t("sidebar.azerbaijaniWriters"), href: "#" },
        { text: t("sidebar.worldWriters"), href: "#" },
      ],
    },
  ];

  const handleItemClick = (itemId) => {
    if (!isOpen || isSmallScreen) return;
    setOpenItem(openItem === itemId ? null : itemId);

    if (isSmallScreen) {
      toggleSidebar();
    }
  };


  const handleSidebarClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className={`sidebar ${isOpen ? "open" : "closed"} ${
        isSmallScreen ? "small-screen" : ""
      }`} onClick={handleSidebarClick}
    >
      <div className="sidebar-content">
        <Link to="/" className="sidebar-logo-container">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYp-dKLlqPV0pcKyX0qo92rCSvXcNLoRMt2A&s"   
            alt="Logo"
            className="sidebar-logo"
          />
          <span className="logo-text">Eazy.az</span>
        </Link>

        <button className="burger-btn" onClick={toggleSidebar}>
          &#9776;
        </button>

        <div className="menu-items">
          <h3>{t("sidebar.mainPage")}</h3>

          <Nav className="flex-column mb-4">
            {navItems.map((item, index) => (
              <Nav.Item key={item.id}>
                <Nav.Link
                  as={item.to ? Link : "div"}
                  to={item.to}
                  onClick={() => handleItemClick(item.id)}
                  aria-controls={item.collapseId}
                  aria-expanded={openItem === item.id}
                  className={`d-flex align-items-center justify-content-between ${
                    openItem === item.id ? "active-link" : ""
                  }`}
                  style={{
                    color: openItem === item.id ? "#0dd6b8" : "#777d74",
                  }}
                >
                  <div className="d-flex align-items-center text">
                    {item.icon && <item.icon className="nav-icon me-4" />}
                    <span className="nav-text">{item.text}</span>
                  </div>
                  {index < 3 && <div className="vertical-icon">|</div>}
                  {item.subItems && (
                    <FaChevronRight
                      className={`arrow ${
                        openItem === item.id ? "collapsed" : "expanded"
                      }`}
                    />
                  )}
                </Nav.Link>
                {item.subItems && (
                  <Collapse in={openItem === item.id}>
                    <div id={item.collapseId}>
                      <Nav className="flex-column ms-3">
                        {item.subItems.map((subItem, index) => (
                          <Nav.Link key={index} href={subItem.href}>
                            {subItem.text}
                          </Nav.Link>
                        ))}
                      </Nav>
                    </div>
                  </Collapse>
                )}
              </Nav.Item>
            ))}
          </Nav>

          <div className="text-center mt-auto bottom-part">
            <img
              src="https://templates.iqonic.design/booksto-dist/html/assets/images/page-img/side-bkg.png"
              className="img-fluid mb-5"
            />
            <button className="btn">{t("sidebar.become")}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
