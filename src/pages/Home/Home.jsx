import React from "react";
import "../Home/home.css";
import HomeSlider from "../../Sections/HomeSection/HomeSlider";
import HomeCards from "../../Sections/HomeSection/HomeCards";
import HomeSliderThree from "../../Sections/HomeSection/HomeSliderThree";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <HomeSlider />
        <HomeCards />
        <HomeSliderThree />
      </div>
    </div>
  );
}

export default Home;
