import React from "react";
import "../BookSection/bookCardsTwo.css";
import { useNavigate } from "react-router-dom";
import FlipCard from "../../components/FlipCard/FlipCard";
import { cardsData } from "../../mocks/mockData";
import { useTranslation } from "react-i18next";
import { DotLoader } from "react-spinners";
import { useLoading } from "../../context/LoadingContext";

function BookCardsTwo() {
  const {t} =useTranslation();
  const navigate = useNavigate();
  const { isLoading, startLoading, stopLoading } = useLoading();

  const handleViewMore = () => {
    startLoading();
    setTimeout(() => {
    navigate(`/book`, {

    });
    stopLoading();
  }, 500);
  };
  
  return (
    <div>
      {isLoading && (
        <div className="loading-overlay">
          <DotLoader color="#3aafa9" size={70} loading={isLoading} />
        </div>
      )}
    <div className="bookCardsTwo mb-4">
      <div className="container">
        <div className="container-slide d-flex justify-content-between align-items-center mb-4">
          <div className="left-text">
            <h4>{t("bookCardsTwo.trendy")}</h4>
          </div>
          <div className="right-text">
            <button className="btn" onClick={handleViewMore}>
            {t("bookCardsTwo.viewMore")}
            </button>
          </div>
        </div>
        <div className="row">
          {cardsData.slice(4, 8).map((card, index) => (
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4 mt-4" key={index}>
              <FlipCard
                id={card.id}
                imageUrl={card.imageUrl}
                title1={card.title1}
                title2={card.title2}
                price={card.price}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

export default BookCardsTwo;
