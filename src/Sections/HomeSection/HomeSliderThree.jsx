import React from "react";
import "../HomeSection/homeSliderThree.css";
import { Link } from "react-router-dom";
import { FaBook, FaGift, FaStar } from "react-icons/fa";

function HomeSliderThree() {
  return (
    <div className="homeSliderThree mb-4">
      <section className="expanded-hero-section">
        <div className="hero-section d-flex align-items-center">
          <div className="container text-center">
            <h1 className="hero-title">Welcome to Your Next Adventure</h1>
            <p className="hero-subtitle">
              Discover new worlds, exciting stories, and timeless classics.
            </p>
            <button className="btn btn-primary btn-lg mt-4">
              Explore Books
            </button>
          </div>
        </div>

        <div className="features-section py-5 text-center">
          <div className="container">
            <h2 className="section-title">Why Choose Us?</h2>
            <div className="row mt-4">
              <div className="col-lg-4 col-md-12 mb-4">
                <div className="feature-box p-3">
                  <i className="fas fa-star fa-3x mb-3">
                    <FaStar />
                  </i>
                  <h4>Bestsellers</h4>
                  <p>Discover top-selling books that readers can't put down.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 mb-4">
                <div className="feature-box p-3">
                  <i className="fas fa-book fa-3x mb-3">
                    <FaBook />
                  </i>
                  <h4>New Arrivals</h4>
                  <p>Stay ahead with the latest releases across all genres.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 mb-4">
                <div className="feature-box p-3">
                  <i className="fas fa-gift fa-3x mb-3">
                    <FaGift />
                  </i>
                  <h4>Exclusive Offers</h4>
                  <p>Enjoy exclusive deals and discounts on selected books.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="newsletter-section py-5 text-center bg-light">
          <div className="container">
            <h2 className="section-title">Subscribe for Updates</h2>
            <p className="section-subtitle">
              Stay updated with the latest releases and exclusive offers.
            </p>
            <form className="newsletter-form d-flex justify-content-center">
              <input
                type="email"
                className="form-control me-2"
                placeholder="Enter your email"
                style={{ maxWidth: "300px" }}
              />
              <button type="submit" className="btn newsletter-btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="quote-section text-center py-5">
          <div className="container">
            <blockquote className="blockquote">
              <p className="mb-2">
                "A room without books is like a body without a soul."
              </p>
              <footer className="blockquote-footer mt-1">
                Marcus Tullius Cicero
              </footer>
            </blockquote>
          </div>
        </div>

        <div className="cta-section py-5 bg-dark text-white text-center">
          <div className="container">
            <h2 className="section-title">Ready to Dive In?</h2>
            <Link to="/category">
              <button className="btn btn-light btn-lg mt-3">
                Start Your Reading Journey
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeSliderThree;
