import React from "react";
import "../BookSection/bookDetail.css";
import {
  FaFacebookF,
  FaPinterestP,
  FaStar,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLoading } from "../../context/LoadingContext";
import { DotLoader } from "react-spinners";



function BookDetail() {
  const {t} = useTranslation();
  const navigate = useNavigate();
  const { isLoading, startLoading, stopLoading } = useLoading();



  const handleBackNavigation = (e) => {
    e.preventDefault(); 
    startLoading();
    setTimeout(() => {
      navigate("/");
      stopLoading();
    }, 2000); 
  };

  return (
    <div>
     {isLoading && (
        <div className="loading-overlay">
          <DotLoader color="#3aafa9" size={70} loading={isLoading} />
        </div>
      )}
    <div className="bookDetail mt-4 mb-4">
      <div className="container mt-4 mb-4">
        <Link to="/" onClick={handleBackNavigation}>
          <p className="link-p">{t("bookDetail.back")}</p>
        </Link>
        <h4 className="bookDetail-text pb-3">{t("bookDetail.description")}</h4>
        <div className="row">
          <div className="col-lg-5 col-md-12 col-sm-12 d-flex flex-column align-items-stretch bookDetail-left-description">
            <div className="row">
              <div className="col-4 d-flex flex-column justify-content-between bookDetail-left-description-left">
                <img
                  src="https://templates.iqonic.design/booksto-dist/html/assets/images/book-dec/02.jpg"
                  className="img-thumbnail sidebar-img mb-2"
                  alt="Book 1"
                />
                <img
                  src="https://templates.iqonic.design/booksto-dist/html/assets/images/book-dec/03.jpg"
                  className="img-thumbnail sidebar-img mb-2"
                  alt="Book 2"
                />
                <img
                  src="https://templates.iqonic.design/booksto-dist/html/assets/images/book-dec/04.jpg"
                  className="img-thumbnail sidebar-img mb-2"
                  alt="Book 3"
                />
              </div>
              <div className="col-8 d-flex align-items-center bookDetail-left-description-right">
                <img
                  src="https://templates.iqonic.design/booksto-dist/html/assets/images/book-dec/02.jpg"
                  className="img-fluid main-img"
                  alt="Featured Book"
                />
              </div>
            </div>
          </div>

          <div className="col-lg-7 col-md-12 col-sm-12 d-flex flex-column justify-content-between bookDetail-right-description">
            <h3>A Casey Christi night books in the raza Dakota Krout</h3>
            <p className="text-muted">
              <strong>12 Azn</strong>
            </p>
            <div className="stars mb-2">
              {[...Array(5)].map((_, index) => (
                <span key={index} className="fa fa-star checked">
                  <FaStar />
                </span>
              ))}
            </div>
            <p>
              The best book testem ipsum Monthering, simply everything printing
              to bring to an end and printing to find the end.in the printing
              industry and is a test to find in the printing industry.
            </p>
            <p className="text-muted-add">
              <strong>{t("bookDetail.author")}:</strong> Novruz Ibrahimov
            </p>
            <div className="d-flex gap-2 mt-2">
              <button className="btn-one me-2">{t("bookDetail.add")}</button>
              <button className="btn-two">{t("bookDetail.read")}</button>
            </div>
            <div className="mt-3">
              <button className="btn-three me-2">
              {t("bookDetail.wishlist")}
              </button>
            </div>
            <div className="mt-3">
              <span className="icon">{t("bookDetail.share")}:</span>
              <i className="btn-link-facebook">
                <FaFacebookF />
              </i>
              <i className="btn-link-twitter ms-2">
                <FaTwitter />
              </i>
              <i className="btn-link-youtube ms-2">
                <FaYoutube />
              </i>
              <i className="btn-link-pinterest ms-2">
                <FaPinterestP />
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default BookDetail;
