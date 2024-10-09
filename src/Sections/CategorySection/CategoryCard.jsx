import React from "react";
import "../CategorySection/categoryCard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FlipCard from "../../components/FlipCard/FlipCard";

function CategoryCard() {
  return (
    <div className="categoryCard mb-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <FlipCard />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <FlipCard />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <FlipCard />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <FlipCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
