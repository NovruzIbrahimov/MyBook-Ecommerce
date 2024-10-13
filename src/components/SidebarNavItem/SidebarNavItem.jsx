import React, { useState } from "react";
import "../SidebarNavItem/sidebarNavItem.css";
import { Collapse, Nav } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import { RiAdminLine } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { RiPagesLine } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { PiLineVerticalBold } from "react-icons/pi";

function SidebarNavItem() {
  const [openHome, setOpenHome] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  const [openBook, setOpenBook] = useState(false);
  const [openEdition, setOpenEdition] = useState(false);
  const [openGenre, setOpenGenre] = useState(false);
  const [openAuthor, setOpenAuthor] = useState(false);

  const [activeLink, setActiveLink] = useState("home");

  return (
    <Nav className="flex-column mb-4">
      <Nav.Item>
        <Nav.Link
          href="/"
          onClick={() => {
            setOpenHome(!openHome);
            setActiveLink("home");
          }}
          aria-controls="home-collapse"
          aria-expanded={openHome}
          className={`d-flex align-items-center justify-content-between ${
            activeLink === "home" ? "active-link" : ""
          }`}
        >
          <div className="d-flex align-items-center text">
            <FaHome className="me-4" />
            <span>Home Page</span>
          </div>
          <PiLineVerticalBold className="arrow" />
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          href="/category"
          onClick={() => {
            setOpenCategory(!openCategory);
            setActiveLink("category");
          }}
          aria-controls="category-collapse"
          aria-expanded={openCategory}
          className={`d-flex align-items-center justify-content-between ${
            activeLink === "category" ? "active-link" : ""
          }`}
        >
          <div className="d-flex align-items-center text">
            <RiAdminLine className="me-4" />
            <span>Category</span>
          </div>
          <PiLineVerticalBold className="arrow" />
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          href="/book"
          onClick={() => {
            setOpenBook(!openBook);
            setActiveLink("book");
          }}
          aria-controls="book-collapse"
          aria-expanded={openBook}
          className={`d-flex align-items-center justify-content-between ${
            activeLink === "book" ? "active-link" : ""
          }`}
        >
          <div className="d-flex align-items-center text">
            <FaBook className="me-4" />
            <span>Book</span>
          </div>
          <PiLineVerticalBold className="arrow" />
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          onClick={() => {
            setOpenEdition(!openEdition);
            setActiveLink("edition");
          }}
          aria-controls="admin-collapse"
          aria-expanded={openEdition}
          className={`d-flex align-items-center justify-content-between ${
            activeLink === "edition" ? "active-link" : ""
          }`}
        >
          <div className="d-flex align-items-center text">
            <RiAdminLine className="me-4" />
            <span>Editions</span>
          </div>
          <FaChevronRight
            className={`arrow ${openEdition ? "collapsed" : "expanded"}`}
          />
        </Nav.Link>
        <Collapse in={openEdition}>
          <div id="admin-collapse">
            <Nav className="flex-column ms-3">
              <Nav.Link href="#">Azerbaijani Editions</Nav.Link>
              <Nav.Link href="#">Turkish Editions</Nav.Link>
              <Nav.Link href="#">English Editions</Nav.Link>
              <Nav.Link href="#">Russian Editions</Nav.Link>
            </Nav>
          </div>
        </Collapse>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          onClick={() => {
            setOpenGenre(!openGenre);
            setActiveLink("genre");
          }}
          aria-controls="user-collapse"
          aria-expanded={openGenre}
          className={`d-flex align-items-center justify-content-between ${
            activeLink === "genre" ? "active-link" : ""
          }`}
        >
          <div className="d-flex align-items-center text">
            <FaRegUserCircle className="me-4" />
            <span>Genres</span>
          </div>
          <FaChevronRight
            className={`arrow ${openGenre ? "collapsed" : "expanded"}`}
          />
        </Nav.Link>
        <Collapse in={openGenre}>
          <div id="user-collapse">
            <Nav className="flex-column ms-3">
              <Nav.Link href="#">Detective</Nav.Link>
              <Nav.Link href="#">Philosophy</Nav.Link>
              <Nav.Link href="#">Mysticism</Nav.Link>
              <Nav.Link href="#">Novel</Nav.Link>
            </Nav>
          </div>
        </Collapse>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          onClick={() => {
            setOpenAuthor(!openAuthor);
            setActiveLink("author");
          }}
          aria-controls="elements-collapse"
          aria-expanded={openAuthor}
          className={`d-flex align-items-center justify-content-between ${
            activeLink === "author" ? "active-link" : ""
          }`}
        >
          <div className="d-flex align-items-center text">
            <RiPagesLine className="me-4" />
            <span>Writers</span>
          </div>
          <FaChevronRight
            className={`arrow ${openAuthor ? "collapsed" : "expanded"}`}
          />
        </Nav.Link>
        <Collapse in={openAuthor}>
          <div id="elements-collapse">
            <Nav className="flex-column ms-3">
              <Nav.Link href="#">Azerbaijani writers</Nav.Link>
              <Nav.Link href="#">World writers</Nav.Link>
            </Nav>
          </div>
        </Collapse>
      </Nav.Item>
    </Nav>
  );
}

export default SidebarNavItem;
