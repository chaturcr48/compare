import React from "react";
import MainCarousal from "../carousal/MainCarousal";
// import MobileSlider from "./MobileSlider";
import PopulatLaptop from "./PopularLaptop";
import PopularMobiles from "./PopularMobiles";
import PopulatTablets from "./PopularTablets";
// import PopularTelevision from "./PopularTelevision";

const Home = () => {
    return (
        <React.Fragment>
            {/* <MobileSlider /> */}
            <MainCarousal />
            <PopularMobiles />
            <PopulatLaptop />
            {/* <PopularTelevision /> */}
            <PopulatTablets />
        </React.Fragment>
    )
}
export default Home;