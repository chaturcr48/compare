import React from "react";
import MainCarousal from "../carousal/MainCarousal";
import LatestMobile from "../mobile/NewestArrival/LatestMobile";
//import MobileSlider from "./MobileSlider";
import PopularLaptop from "./PopularLaptop";
import PopularMobiles from "./PopularMobiles";
import PopulatTablets from "./PopularTablets";
// import PopularTelevision from "./PopularTelevision";

const Home = () => {
    return (
        <React.Fragment>
            <MainCarousal />
            {/* <MobileSlider /> */}
            <LatestMobile />
            <PopularMobiles />
            <PopularLaptop />
            {/* <PopularTelevision /> */}
            <PopulatTablets />
            
        </React.Fragment>
    )
}
export default Home;