import React from "react";
import "../Category/category.css";
import CategorySearch from "../../Sections/CategorySection/CategorySearch";
import CategoryCard from "../../Sections/CategorySection/CategoryCard";
import CategoryCardOne from "../../Sections/CategorySection/CategoryCardOne";
import CategoryCardTwo from "../../Sections/CategorySection/CategoryCardTwo";

function Category() {
  return (
    <div className="category">
      <div className="container">
        <CategorySearch />
        <CategoryCard />
        <CategoryCardOne />
        <CategoryCardTwo />
      </div>
    </div>
  );
}

export default Category;
