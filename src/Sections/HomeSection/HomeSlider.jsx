import React from "react";
import "../HomeSection/homeSlider.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";

function HomeSlider() {
  const {t} = useTranslation();
  const images = [
    {
      url: "https://templates.iqonic.design/booksto-dist/html/assets/images/browse-books/01.jpg",
    },
    {
      url: "https://templates.iqonic.design/booksto-dist/html/assets/images/browse-books/02.jpg",
    },
    {
      url: "https://templates.iqonic.design/booksto-dist/html/assets/images/browse-books/03.jpg",
    },
    {
      url: "https://templates.iqonic.design/booksto-dist/html/assets/images/browse-books/04.jpg",
    },
    {
      url: "https://templates.iqonic.design/booksto-dist/html/assets/images/browse-books/05.jpg",
    },
    {
      url: "https://templates.iqonic.design/booksto-dist/html/assets/images/browse-books/06.jpg",
    },
    {
      url: "https://templates.iqonic.design/booksto-dist/html/assets/images/browse-books/07.jpg",
    },
    {
      url: "https://templates.iqonic.design/booksto-dist/html/assets/images/browse-books/08.jpg",
    },
    {
      url: "https://templates.iqonic.design/booksto-dist/html/assets/images/browse-books/09.jpg",
    },
    {
      url: "https://templates.iqonic.design/booksto-dist/html/assets/images/browse-books/10.jpg",
    },
    {
      url: "https://templates.iqonic.design/booksto-dist/html/assets/images/browse-books/11.jpg",
    },
    {
      url: "https://templates.iqonic.design/booksto-dist/html/assets/images/browse-books/12.jpg",
    },
  ];

  return (
    <div className="homeSlider mb-4 mt-4">
      <div className="container carousel-container">
        <div className="carousel-title">
          <h2>{t("homeSection.featured")}</h2>
        </div>
        <Carousel indicators={false} interval={3000}>
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <div className="row justify-content-center">
                <div className="col-lg-3 col-md-6 col-sm-12 mb-4 mt-4 carousel-card">
                  <img
                    className="d-block w-100"
                    src={image.url}
                    alt={`Book ${index + 1}`}
                    style={{ height: "400px", objectFit: "cover" }}
                  />
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default HomeSlider;
