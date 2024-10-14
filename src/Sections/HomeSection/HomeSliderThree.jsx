import React from "react";
import "../HomeSection/homeSliderThree.css";
import { Link } from "react-router-dom";
import { FaBook, FaGift, FaStar } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function HomeSliderThree() {
  const {t} = useTranslation();
  return (
    <div className="homeSliderThree mb-4">
      <section className="expanded-hero-section">
        <div className="hero-section d-flex align-items-center">
          <div className="container text-center">
            <h1 className="hero-title">{t("homeSection.welcome")}</h1>
            <p className="hero-subtitle">
            {t("homeSection.welcomeSubtitle")}
            </p>
            <button className="btn btn-primary btn-lg mt-4">
            {t("homeSection.welcomeButton")}
            </button>
          </div>
        </div>

        <div className="features-section py-5 text-center">
          <div className="container">
            <h2 className="section-title">{t("homeSection.choose")}</h2>
            <div className="row mt-4">
              <div className="col-lg-4 col-md-12 mb-4">
                <div className="feature-box p-3">
                  <i className="fas fa-star fa-3x mb-3">
                    <FaStar />
                  </i>
                  <h4>{t("homeSection.bestseller")}</h4>
                  <p>{t("homeSection.discoverTop")}</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 mb-4">
                <div className="feature-box p-3">
                  <i className="fas fa-book fa-3x mb-3">
                    <FaBook />
                  </i>
                  <h4>{t("homeSection.arrival")}</h4>
                  <p>{t("homeSection.stayAhead")}</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 mb-4">
                <div className="feature-box p-3">
                  <i className="fas fa-gift fa-3x mb-3">
                    <FaGift />
                  </i>
                  <h4>{t("homeSection.offers")}</h4>
                  <p>{t("homeSection.enjoy")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="newsletter-section py-5 text-center bg-light">
          <div className="container">
            <h2 className="section-title">{t("homeSection.subscribe")}</h2>
            <p className="section-subtitle">
            {t("homeSection.stayUp")}
            </p>
            <form className="newsletter-form d-flex justify-content-center">
              <input
                type="email"
                className="form-control me-2"
                placeholder={t("homeSection.homePlaceholder")}
                style={{ maxWidth: "300px" }}
              />
              <button type="submit" className="btn newsletter-btn">
              {t("homeSection.subscribeButton")}
              </button>
            </form>
          </div>
        </div>

        <div className="quote-section text-center py-5">
          <div className="container">
            <blockquote className="blockquote">
              <p className="mb-2">
              {t("homeSection.blockquote")}
              </p>
              <footer className="blockquote-footer mt-1">
              {t("homeSection.marcus")}
              </footer>
            </blockquote>
          </div>
        </div>

        <div className="cta-section py-5 bg-dark text-white text-center">
          <div className="container">
            <h2 className="section-title">{t("homeSection.ready")}</h2>
            <Link to="/category">
              <button className="btn btn-light btn-lg mt-3">
              {t("homeSection.start")}
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeSliderThree;
