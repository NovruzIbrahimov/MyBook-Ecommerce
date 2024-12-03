import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Category from "./pages/Category/Category";
import Book from "./pages/Book/Book";
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import Cart from "./pages/Cart/Cart";
import ShopNow from "./pages/ShopNow/ShopNow";
import Join from "./pages/Join/Join";
import Register from "./pages/Register/Register";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1024);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1024);
      if (window.innerWidth > 1024) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleOutsideClick = () => {
    if (isSmallScreen && isSidebarOpen) {
      closeSidebar();
    }
  };

  return (
    <Router>
      <div
        className={`app ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"} ${
          isSmallScreen ? "small-screen" : ""
        }`}
      >
        <Sidebar
          isOpen={isSidebarOpen}
          closeSidebar={closeSidebar}
          toggleSidebar={toggleSidebar}
          isSmallScreen={isSmallScreen}
        />
        <div className="main-section" onClick={handleOutsideClick}>
          <Header toggleSidebar={toggleSidebar} isSmallScreen={isSmallScreen} />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category" element={<Category />} />
              <Route path="/book" element={<Book />} />
              <Route path="/detail/:id" element={<Detail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/shopNow" element={<ShopNow />} />
              <Route path="/join" element={<Join />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
