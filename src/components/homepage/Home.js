import React from "react";
import MainCarousal from "../carousal/MainCarousal";
import LatestMobile from "../mobile/NewestArrival/LatestMobile";
//import MobileSlider from "./MobileSlider";
import PopularLaptop from "./PopularLaptop";
import PopularMobiles from "./PopularMobiles";
import PopulatTablets from "./PopularTablets";
// import PopularTelevision from "./PopularTelevision";

import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <React.Fragment>
      <MainCarousal />
      <Helmet>
        <script
          type="text/javascript"
          src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js"
          data-name="bmc-button"
          data-slug="chatur"
          data-color="#FFDD00"
          data-emoji="🍕"
          data-font="Cookie"
          data-text="Buy me a pizza"
          data-outline-color="#000000"
          data-font-color="#000000"
          data-coffee-color="#ffffff"
        ></script>
      </Helmet>
      {/* <MobileSlider /> */}
      <LatestMobile />
      <PopularMobiles />
      <PopularLaptop />
      {/* <PopularTelevision /> */}
      <PopulatTablets />
    </React.Fragment>
  );
};
export default Home;
