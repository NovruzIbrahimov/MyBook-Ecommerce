import React from "react";
import "../Detail/detail.css";
import DetailSection from "../../Sections/DetailSection/DetailSection";
import DetailCardOne from "../../Sections/DetailSection/detailCardOne";

function Detail() {
  return (
    <div className="detail">
      <div className="container">
        <DetailSection />
        <DetailCardOne />
      </div>
    </div>
  );
}

export default Detail;
